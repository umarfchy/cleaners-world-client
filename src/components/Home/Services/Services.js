import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ServiceContext } from "../../../App";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  const [selectedService, setSelectedService] = useContext(ServiceContext);
  const history = useHistory();

  const handlePurchase = info => {
    const newServiceData = {
      ...selectedService,
      serviceName: info.title,
      servicePrice: info.price,
      serviceId: info._id,
    };
    setSelectedService(newServiceData);
    history.push("/payment");
  };

  useEffect(() => {
    const dbDataUrl = "https://desolate-ravine-27656.herokuapp.com/services";
    fetch(dbDataUrl)
      .then(res => res.json())
      .then(data => setServiceData(data));
  }, []);

  return (
    <section id="services" className="row d-flex justify-content-center mb-5">
      <div className="w-75 row">
        <h3 style={{ textAlign: "center", margin: "2rem 0" }}>
          Services We Provide
        </h3>
        {serviceData.map(info => (
          <ServiceCard
            info={info}
            handlePurchase={() => {
              handlePurchase(info);
            }}
          ></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
