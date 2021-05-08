import React, { useContext } from "react";
import CorporateClients from "../CorporateClients/CorporateClients";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import Services from "../Services/Services";
import SubscriptionOffer from "../SubscriptionOffer/SubscriptionOffer";
import Testimonials from "../Testimonials/Testimonials";
import { ServiceContext } from "../../../App";

const Home = () => {
  const [selectedService, setSelectedService] = useContext(ServiceContext);
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <SubscriptionOffer></SubscriptionOffer>
      <Testimonials></Testimonials>
      <CorporateClients></CorporateClients>
      <Footer></Footer>
    </div>
  );
};

export default Home;
