import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./InfoCard.css";

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 info-card">
      <div
        className={`d-flex justify-content-center info-container info-${info.bg} text-dark`}
      >
        <div>
          <FontAwesomeIcon
            className="info-icon"
            icon={info.icon}
          ></FontAwesomeIcon>
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.desc}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
