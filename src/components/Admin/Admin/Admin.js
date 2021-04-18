import React, { useState } from "react";
import "./Admin.css";
import AddService from "../AddService/AddService";
import { Link } from "react-router-dom";
import CustomerReview from "../../Dashboard/CustomerReview/CustomerReview";

const Admin = () => {
  const [onPageRoute, setOnPageRoute] = useState("addService");

  return (
    <div>
      <div className="adminArea">
        <div className="leftBar">
          <p>Inside Cleaner's World</p>
          <ul>
            <li
              onClick={() => {
                setOnPageRoute("addService");
              }}
            >
              Add Service
            </li>
            <li
              onClick={() => {
                setOnPageRoute("addReview");
              }}
            >
              Add Review
            </li>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="rightShowcase">
          {onPageRoute === "addService" ? (
            <AddService />
          ) : (
            <CustomerReview></CustomerReview>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
