import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    const dbDataUrl = "https://desolate-ravine-27656.herokuapp.com/services";
    fetch(dbDataUrl)
      .then(res => res.json())
      .then(data => setServiceData(data));
  }, []);

  return (
    <section className="row d-flex justify-content-center mb-5">
      <div className="w-75 row">
        <h3 style={{ textAlign: "center", margin: "2rem 0" }}>
          Services We Provide
        </h3>
        {serviceData.map(info => (
          <ServiceCard info={info}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
