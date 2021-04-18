import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ info }) => {
  const dbRoot = "https://desolate-ravine-27656.herokuapp.com/";
  return (
    <div class="card testimonialCardStyle col-md-3">
      <img
        src={`${dbRoot}/${info.imgName}`}
        class="card-img-top testimonialCardImage"
        alt="..."
      />
      <h5
        style={{
          fontSize: "1rem",
          textAlign: "center",
          fontStyle: "italic",
          margin: ".5rem 0",
        }}
        class="card-title"
      >
        {info.name}
      </h5>
      <small
        style={{
          fontSize: "1rem",
          textAlign: "center",
          fontStyle: "italic",
          margin: ".5rem 0",
        }}
        class="card-title"
      >
        {info.company}
      </small>
      <div class="card-body testimonialCardBody">
        <p class="card-text">{info.review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
