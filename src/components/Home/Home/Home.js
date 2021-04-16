import React from "react";
import Header from "../Header/Header";
import Services from "../Services/Services";
import SubscriptionOffer from "../SubscriptionOffer/SubscriptionOffer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <SubscriptionOffer></SubscriptionOffer>
    </div>
  );
};

export default Home;
