import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ info }) => {
  return (
    <div
      class="card CardStyle"
      style={{
        width: "18rem",
      }}
    >
      <img
        style={{ height: "14rem", paddingTop: ".8rem" }}
        src={info.image}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{info.title}</h5>
        <p class="card-text">{info.desc}</p>
        <a href="#" class="btn btn-dark">
          Details
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
