import React from "react";
import about from "../../../../image/Food-Plate.png";

const AboutUs = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="lg:text-6xl lg:font-bold sm:text-2xl">
            <span className="text-warning">𝘼𝙗𝙤𝙪𝙩</span> Us
          </h1>
          <h3 className="text-2xl font-bold py-12">Why Choose us?</h3>
          <p className="pb-8">
          Exclusive Foods has a strong commitment to health and nutrition, therefore it only distributes foodstuff manufactured with very few or none additives. This approach helps to preserve traditional recipes and to safeguard customer's health.
          </p>
          <button className="btn btn-warning text-white">
            Order Now
          </button>
        </div>
        <img src={about} className="lg:max-w-xl" alt="about" />
      </div>
    </div>
  );
};

export default AboutUs;
