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
  const renderCorpClientCard = (imagePar, colSpreadSize) => {
    const classDef = `d-flex align-items-center justify-content-center ${colSpreadSize}`;
    return (
      <div
        style={{
          border: "0.1rem solid white",
          boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 15px",
          borderRadius: ".8rem",
          height: "10rem",
          width: "10rem",
          margin: ".5rem",
        }}
        className={classDef}
      >
        <img className="img-fluid w-75" src={imagePar} alt="" />
      </div>
    );
  };
  return (
    <div className="mt-3 mb-5 mx-auto w-75">
      <h3 className="text-center mb-5">Our Corporate Clients</h3>
      <div className="row d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
          {renderCorpClientCard(clientList[0], "col-md-3")}
          {renderCorpClientCard(clientList[1], "col-md-3")}
          {renderCorpClientCard(clientList[2], "col-md-3")}
          {renderCorpClientCard(clientList[3], "col-md-3")}
        </div>
        <div className="row d-flex justify-content-center">
          {renderCorpClientCard(clientList[4], "col-md-4")}
          {renderCorpClientCard(clientList[5], "col-md-4")}
          {renderCorpClientCard(clientList[6], "col-md-4")}
        </div>
      </div>
    </div>
  );
};

export default CorporateClients;
