import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import axios from "axios";

const CustomerReview = () => {
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

        {/* <input
          className="form-control mb-3"
          name="uploadedImage"
          type="file"
          onChange={handleImageUpload}
        /> */}

        <input
          className="btn btn-success col-md-2"
          id="addProductSubmitBtn"
          type="submit"
        />
      </form>
    </div>
  );
};

export default CustomerReview;
