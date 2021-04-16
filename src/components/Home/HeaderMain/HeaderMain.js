import React from "react";
import mainImg1 from "./../../../Images/mainImg1.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderMain = () => {
  return (
    <div>
      <main
        style={{ height: "32rem" }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-4 offset-md-1">
          <h1 style={{ color: "#3a4256", fontSize: "2.45rem" }}>
            Your Clean Workspace <br />
            Our Promise!
          </h1>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at
            incidunt asperiores fugiat iure dolorem.
          </p>
          <button
            style={{
              background: "#b2efe4",
              color: "#3a4256",
              fontSize: "1.2rem",
            }}
            className="btn"
          >
            HIRE US NOW{"  "}
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </button>
        </div>
        <div className="col-md-6">
          <img
            style={{
              borderRadius: "0.8rem",
              width: "80%",
              marginLeft: "5rem",
            }}
            src={mainImg1}
            alt=""
            className="img-fluid"
          />
        </div>
      </main>
    </div>
  );
};

export default HeaderMain;
