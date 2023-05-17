import React from "react";
import burger from "../../../../image/main_img.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={burger} className="lg:max-w-xl" alt="banner" />
        <div>
          <h1 className="lg:text-6xl font-bold md:text-4xl">
            Get Fresh <span className="text-warning">𝑭𝒐𝒐𝒅</span> <br /> in a
            easy way
          </h1>
          <p className="py-12">
            Food is essential for our body for a number of reasons. It gives us
            the energy needed for working, playing and doing day-to-day
            activities. It helps us to grow, makes our bones and muscles
            stronger, repairs damaged body cells and boosts our immunity against
            external harmful elements like pathogens. Besides, food also gives
            us a kind of satisfaction that is integral to our mental wellbeing,
            but there are some foods that are not healthy. Only those food items
            that contain nutrients in a balanced proportion are generally
            considered as healthy. People of all ages must be aware of the
            benefits of eating healthy food because it ensures a reasonably
            disease-free, fit life for many years.
          </p>
          <button className="btn btn-warning text-white">
            Order Now &#10230;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
