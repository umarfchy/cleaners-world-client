import React from "react";
import "./ServiceCard.css";

const ServiceCard = props => {
  const { info, handlePurchase } = props;
  const dbRoot = "https://desolate-ravine-27656.herokuapp.com/";

  return (
    <div
      class="card serviceCardStyle"
      style={{
        width: "18rem",
      }}
    >
      <img
        style={{ height: "14rem", paddingTop: ".8rem" }}
        src={`${dbRoot}/${info.imgName}`}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <div
          style={{
            height: "10rem",
          }}
        >
          <h5 class="card-title">{info.title}</h5>
          <p class="card-text">${info.price}</p>
          <p class="card-text">{info.desc}</p>
        </div>
        <button onClick={handlePurchase} class="btn btn-dark">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
