import React from "react";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      {/* <BusinessInfo></BusinessInfo> */}
    </div>
  );
};

export default Header;
