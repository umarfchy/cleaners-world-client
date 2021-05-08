import React from "react";
import mainImg1 from "./../../../Images/mainImg1.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderMain = () => {
  return (
    <main
      style={{ height: "32rem" }}
      className="row d-flex align-items-center justify-content-center"
    >
      {/* action message info start */}
      <div className="col-md-4 text-center ">
        <h1 style={{ color: "#3a4256", fontSize: "2.45rem" }}>
          Your Clean Workspace
          <br />
          Our Promise!
        </h1>
        <p className="text-secondary text-justify">
          We provide world class cleaning services. You show the space and leave
          the rest to us.
        </p>
        <a
          href="#services"
          style={{
            background: "#b2efe4",
            color: "#3a4256",
            fontSize: "1.2rem",
          }}
          className="btn"
        >
          HIRE US NOW{"  "}
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </a>
      </div>
      {/* action message info end */}

      {/* main Img info start */}

      <div className="col-md-6 d-flex justify-content-center align-items-center ">
        <img
          style={{
            borderRadius: "0.8rem",
            width: "80%",
          }}
          src={mainImg1}
          alt=""
          className="img-fluid"
        />
      </div>
      {/* main Img info start */}
    </main>
  );
};

export default HeaderMain;
