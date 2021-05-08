import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { ServiceContext, UserContext } from "../../../App";

const PaymentPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user, setUser] = useContext(UserContext);
  const [selectedService, setSelectedService] = useContext(ServiceContext);

  const newServiceData = {
    ...selectedService,
    userName: user.name,
    userEmail: user.email,
  };
  console.log(register);
  //actions on submitting the form
  const onSubmit = data => {
    const purchaseInfo = {
      payerName: data.payerName,
      payerEmail: data.payerEmail,
      selectedService: data.selectedService,
      status: "pending",
    };

    // sending purchase info to the backend server
    const databaseUrl = "https://desolate-ravine-27656.herokuapp.com/order";
    fetch(databaseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(purchaseInfo),
    })
      .then(res => res.json())
      .then(resData => {
        alert("Submission complete");
        console.log(
          "Following book info is added to the server : ",
          resData.ops[0]
        );
      })
      .catch(err => console.log(err));

    reset();
  };

  return (
    <div className="w-75 mx-auto">
      <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ textAlign: "center", margin: "1.2rem 0 1.2rem 0" }}>
          Payment
        </h3>
        <fieldset disabled>
          {/* input details would be same as login details */}
          <label className="mb-2" htmlFor="payerName">
            Name
          </label>
          <input
            className="form-control mb-3"
            id="payerName"
            name="payerName"
            type="text"
            value={newServiceData.userName}
            {...register("payerName", { required: true })}
          />
          <label className="mb-2" htmlFor="payerEmail">
            Email
          </label>
          <input
            className="form-control mb-3"
            id="payerEmail"
            name="payerEmail"
            type="text"
            value={newServiceData.userEmail}
            {...register("payerEmail", { required: true })}
          />
          <label className="mb-2" htmlFor="selectedService">
            Service Name
          </label>
          <input
            className="form-control mb-3"
            id="selectedService"
            name="selectedService"
            type="text"
            value={newServiceData.serviceName}
            {...register("selectedService", { required: true })}
          />

          <input className=" mb-3" type="radio" checked />
          <label className="ms-2 mb-3">
            <FontAwesomeIcon className="icon mx-2" icon={faCcMastercard} />
            Credit Card
          </label>
        </fieldset>

        <input
          className="form-control mb-3"
          name="payerCardNo"
          type="text"
          placeholder={"Card Number"}
          {...register("payerCardNo", { required: true })}
        />
        <label className="mb-2" htmlFor="payerCardExp">
          Card Valid Till
        </label>
        <input
          className="form-control mb-3"
          name="payerCardExp"
          type="month"
          {...register("payerCardExp", { required: true })}
        />
        <input
          className="form-control mb-3"
          name="payerCardCVC"
          type="number"
          placeholder="CVC"
          {...register("payerCardCVC", { required: true })}
        />
        <div class="form-text">
          You will be charged ${newServiceData.servicePrice}
        </div>

        <input className="btn btn-dark mt-3" type="submit" value="Pay" />
      </form>
    </div>
  );
};

export default PaymentPage;
