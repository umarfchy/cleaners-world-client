import React from "react";
import mainImg1 from "./../../../Images/mainImg1.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";

const HeaderMain = () => {
  const mobileScreen = useMediaQuery("(max-width: 480px)");
  const clsOnMob =
    "row d-flex align-items-center justify-content-center container mx-auto flex-column-reverse";
  const headerTxtProperties = mobileScreen
    ? { color: "#3a4256" }
    : { color: "#3a4256", fontSize: "2.45rem" };
  return (
    <main
      style={{ height: "32rem" }}
      className={
        mobileScreen
          ? clsOnMob
          : "row d-flex align-items-center justify-content-center container mx-auto"
      }
    >
      {/* action message info start */}
      <div className="col-md-6 col-sm-12 text-center ">
        <h1 style={headerTxtProperties}>
          Your Clean Workspace
          <br />
          Our Promise!
        </h1>
        <p className="text-secondary text-justify">
          We provide world class cleaning services.You show the space and leave
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

      <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center ">
        <img
          style={{
            borderRadius: "0.8rem",
            width: "90%",
            marginBottom: "1.2rem",
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
