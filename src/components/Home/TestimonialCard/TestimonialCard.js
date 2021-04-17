import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ info }) => {
  return (
    <div class="card testimonialCardStyle col-md-3">
      <img
        src={info.image}
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
      <div class="card-body testimonialCardBody">
        <p class="card-text">{info.desc}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
