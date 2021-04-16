import React from "react";
import InfoCard from "../InfoCard/InfoCard";

import {
  faClock,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const InfosData = [
  {
    title: "Opening Hour",
    desc: "We are open 7 days",
    icon: faClock,
    bg: "primary",
  },
  {
    title: "Visit Us",
    desc: "Brooklyn NY",
    icon: faMapMarkerAlt,
    bg: "dark",
  },
  {
    title: "Call us now",
    desc: "+1123456789",
    icon: faPhoneAlt,
    bg: "primary",
  },
];
const BusinessInfo = () => {
  return (
    <section className="row d-flex justify-content-center">
      <div className="w-75 row">
        {InfosData.map(info => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
