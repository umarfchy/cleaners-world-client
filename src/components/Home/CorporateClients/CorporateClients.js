import React from "react";
import "./CorporateClient.css";
import ibbl from "./../../../Images/corporateClients/ibbl.jpg";
import nagad from "./../../../Images/corporateClients/nagad.png";
import pathao from "./../../../Images/corporateClients/pathao.png";
import rokomari from "./../../../Images/corporateClients/rokomari.png";
import uniliver from "./../../../Images/corporateClients/uniliver.svg";
import alpha from "./../../../Images/corporateClients/alpha.jpg";
import beximco from "./../../../Images/corporateClients/beximco.png";

const clientList = [ibbl, nagad, pathao, rokomari, uniliver, alpha, beximco];

const CorporateClients = () => {
  return (
    <div className="mt-3 mb-5 mx-auto w-75">
      <h3 style={{ textAlign: "center" }}>
        Our <span style={{ color: "blue" }}>Corporate Clients</span>
      </h3>
      <div className="row d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
          <img src={clientList[0]} alt="" className="col-md-3 corporateImg" />
          <img src={clientList[1]} alt="" className="col-md-3 corporateImg" />
          <img src={clientList[2]} alt="" className="col-md-3 corporateImg" />
          <img src={clientList[3]} alt="" className="col-md-3 corporateImg" />
        </div>
        <div className="row d-flex justify-content-center">
          <img src={clientList[5]} alt="" className="col-md-4 corporateImg" />
          <img src={clientList[6]} alt="" className="col-md-4 corporateImg" />
          <img src={clientList[4]} alt="" className="col-md-4 corporateImg" />
        </div>
      </div>
    </div>
  );
};

export default CorporateClients;
