import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import axios from "axios";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState(null);

  const handleFileChange = e => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  //actions on submitting the form

  const onSubmit = data => {
    const serviceData = {
      serviceTitle: data.serviceTitle,
      serviceDesc: data.serviceDesc,
      servicePrice: data.servicePrice,
    };
    //sending book info to the backend server
    // const databaseUrl =
    //   "https://desolate-ravine-27656.herokuapp.com/addService";

    const databaseUrl = "http://localhost:5000/addService";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", serviceData.serviceTitle);
    formData.append("price", serviceData.servicePrice);
    formData.append("desc", serviceData.serviceDesc);

    fetch(databaseUrl, {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert("Submission complete");
        // console.log(
        //   "Following book info is added to the server : ",
        //   data.ops[0]
        // );
      })
      .catch(error => {
        console.error(error);
      });

    reset();
  };

  return (
    //adds service to database
    <div className="w-75 mx-auto">
      <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ textAlign: "center", margin: "1.2rem 0 1.2rem 0" }}>
          Add Service
        </h3>
        <input
          className="form-control mb-3"
          name="serviceTitle"
          type="text"
          placeholder="Title"
          {...register("serviceTitle", { required: true })}
        />

        <input
          className="form-control mb-3"
          name="servicePrice"
          type="number"
          placeholder={"Price"}
          {...register("servicePrice", { required: true })}
        />

        <input
          className="form-control mb-3"
          name="serviceDesc"
          type="text"
          placeholder={"Description"}
          {...register("serviceDesc", { required: true })}
        />
        <input
          onChange={handleFileChange}
          className="form-control mb-3"
          name="uploadedImage"
          type="file"
        />

        <input
          className="btn btn-success col-md-2"
          id="addProductSubmitBtn"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddService;
