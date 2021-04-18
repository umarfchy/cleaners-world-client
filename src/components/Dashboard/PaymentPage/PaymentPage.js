import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";

const PaymentPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imgUrl, setImgUrl] = useState(null);

  //actions on submitting the form
  const onSubmit = data => {
    const bookData = {
      bookName: data.bookName,
      authorName: data.authorName,
      price: data.price,
      imgUrl: imgUrl,
    };

    //sending book info to the backend server
    // const databaseUrl = `https://blueberry-tart-01004.herokuapp.com/addBook`;
    const databaseUrl = "#";
    fetch(databaseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookData),
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

  const handleImageUpload = event => {
    const imageData = new FormData();
    imageData.set("key", "cf51017bd5120601f73b9b13098c1644");
    imageData.append("image", event.target.files[0]);

    // const imageBBapi = "https://api.imgbb.com/1/upload";
    const imageBBapi = "#";
    // sending img data to server and getting live url
    axios
      .post(imageBBapi, imageData)
      .then(function (response) {
        const imgLiveUrl = response.data.data.display_url;
        setImgUrl(imgLiveUrl);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="w-75 mx-auto">
      <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ textAlign: "center", margin: "1.2rem 0 1.2rem 0" }}>
          Payment
        </h3>
        <fieldset disabled>
          {/* input details would be same as login details */}
          <input
            className="form-control mb-3"
            name="payerName"
            type="text"
            placeholder="Name"
            {...register("payerName", { required: true })}
          />

          <input
            className="form-control mb-3"
            name="payerEmail"
            type="text"
            placeholder={"Email"}
            {...register("payerEmail", { required: true })}
          />

          <input
            className="form-control mb-3"
            name="selectedService"
            type="text"
            placeholder="Service Name"
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
        <div class="form-text">You will be charged -------</div>

        <input
          className="btn btn-dark mt-3"
          id="addProductSubmitBtn"
          type="submit"
          value="Pay"
        />
      </form>
    </div>
  );
};

export default PaymentPage;
