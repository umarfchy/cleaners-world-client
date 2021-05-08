import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CustomerReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState(null);

  const handleFileChange = e => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  //actions on submitting the form

  const onSubmit = data => {
    const reviewData = {
      reviewerName: data.reviewerName,
      reviewerCompany: data.reviewerCompany,
      reviewDesc: data.reviewDesc,
    };
    //sending book info to the backend server
    const databaseUrl = "https://desolate-ravine-27656.herokuapp.com/addReview";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", reviewData.reviewerName);
    formData.append("company", reviewData.reviewerCompany);
    formData.append("review", reviewData.reviewDesc);

    fetch(databaseUrl, {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        alert("Submission complete");
        console.log(
          "Following book info is added to the server : ",
          data.ops[0]
        );
      })
      .catch(error => {
        console.error(error);
      });

    reset();
  };

  return (
    //adds review to db on submit
    <div className="w-75 mx-auto">
      <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ textAlign: "center", margin: "1.2rem 0 1.2rem 0" }}>
          Review
        </h3>
        <input
          className="form-control mb-3"
          name="reviewerName"
          type="text"
          placeholder="Your Name"
          {...register("reviewerName", { required: true })}
        />

        <input
          className="form-control mb-3"
          name="reviewerCompany"
          type="text"
          placeholder={"Company's name & Designation"}
          {...register("reviewerCompany", { required: true })}
        />

        <input
          className="form-control mb-3"
          name="reviewDesc"
          type="text"
          placeholder={"Description"}
          {...register("reviewDesc", { required: true })}
        />

        <input
          className="form-control mb-3"
          name="uploadedImage"
          type="file"
          onChange={handleFileChange}
        />

        <input className="btn btn-success col-md-2" type="submit" />
      </form>
    </div>
  );
};

export default CustomerReview;
