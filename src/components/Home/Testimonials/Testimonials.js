import React, { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const dbDataUrl = "https://desolate-ravine-27656.herokuapp.com/reviews";
    fetch(dbDataUrl)
      .then(res => res.json())
      .then(data => setReviewData(data));
  }, []);

  return (
    <section className="row d-flex justify-content-center mb-5">
      <div className="w-75 row d-flex justify-content-center">
        <h4 style={{ textAlign: "center", margin: "2rem 0" }}>
          Reviews from Individual Customers
        </h4>
        {reviewData.map(info => (
          <TestimonialCard info={info}></TestimonialCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
