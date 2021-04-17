import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import Reviewer1 from "./../../../Images/Reviwer1.png";
import Reviewer2 from "./../../../Images/Reviwer2.png";
import Reviewer3 from "./../../../Images/Reviwer3.png";

const ReviewerData = [
  {
    name: "John Carter",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, corporis",
    image: Reviewer1,
  },
  {
    name: "Smith Watson",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, corporis",
    image: Reviewer2,
  },
  {
    name: "Carl Doglus",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, corporis",
    image: Reviewer3,
  },
  {
    name: "Smith Watson",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, corporis",
    image: Reviewer2,
  },
];

const Testimonials = () => {
  return (
    <section className="row d-flex justify-content-center mb-5">
      <div className="w-75 row d-flex justify-content-center">
        <h4 style={{ textAlign: "center", margin: "2rem 0" }}>
          Reviews from Individual Customers
        </h4>
        {ReviewerData.map(info => (
          <TestimonialCard info={info}></TestimonialCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
