import React from "react";
import "./Footer.css";
import FooterCol from "./../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const services = [
    { name: "Office cleaning", link: "/officeCleaning" },
    { name: "House cleaning", link: "/houseCleaning" },
    { name: "Pest control", link: "/pestControl" },
    { name: "Glass cleaning", link: "/glassCleaning" },
    { name: "Floor cleaning", link: "/floorCleaning" },
  ];
  const client = [
    { name: "Corporate", link: "/corporate" },
    { name: "Business", link: "/business" },
  ];
  const ourAddress = [{ name: "Shantinagar, Dhaka", link: "//google.com/map" }];

  return (
    <footer className="footer-area clear-both w-75 mx-auto">
      <div className="container pt-5 ms-5">
        <div className="row py-5">
          <FooterCol key={1} menuTitle={"Services"} menuItems={services} />
          <FooterCol key={2} menuTitle={"Client"} menuItems={client} />
          <FooterCol key={3} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call now</h6>
              <button className="btn btn-secondary">+08801712346789</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
