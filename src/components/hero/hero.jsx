import React from "react";
import banner from "../../assets/Shopping.jpg";

function Hero() {
  return (
    <>
      <div className=" relative">
        <div>
          <img
            src={banner}
            alt=""
            className=" w-full object-cover object-center "
          />
        </div>
        <div className=" absolute top-[25%] w-full text-end right-5">
          <h1 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-400">
            Discover Your Next Destination!
          </h1>
          <p className="text-[10px] sm:text-[15px] md:text-xl lg:text-2xl mt-2 lg:mt-5 font-semibold">
            Shop Our Latest Arrival & Unleash Your Style
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
