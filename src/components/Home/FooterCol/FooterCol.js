import React from "react";
// import { Link } from "react-router-dom";

const FooterCol = props => {
  return (
    <div className="col-md-4">
      <h6 className="text-primary">
        {props.menuTitle ? props.menuTitle : " "}
      </h6>
      <ul className="list-unstyled mt-4">
        {props.menuItems.map((item, index) => (
          <li key={index}>
            <a to={item.link} className="text-secondary">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {props.children && props.children}
    </div>
  );
};

export default FooterCol;
