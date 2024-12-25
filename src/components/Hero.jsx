import React, { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../assets/constants.index";
const Hero = () => {
  const [shoe, setShoe] = useState(bigShoe1);
  return (
    <div className="hero min-h-screen  flex items-center gap-4 px-[3%] max-md:flex-col max-md:items-start max-md:py-24 max-md:px-[5%]">
      <div className="relative left w-[50%] max-md:w-[100%]">
        <h4 className="text-red-400 text-2xl max-md:text-lg">
          Our Summer collections
        </h4>
        <h1 className="text-8xl py-9 font-semibold max-md:text-7xl max-md:py-2">
          <span className="relative whitespace-nowrap bg-white z-10 pr-10 max-md:whitespace-normal max-md:bg-transparent max-md:py-2">
            The New Arrival
          </span>
          <br />
          <span className="inline-block text-red-400 pt-7 pb-1 max-md:pt-1">
            Nike
          </span>{" "}
          Shoes
        </h1>
        <p className="text-gray-500 text-xl font-thin">
          Discover stylish Nike arrivals, quality <br /> comfort, and innovation
          for your active life
        </p>
        <button className="bg-red-400 mt-6 py-3 px-5 rounded-[25px] cursor-pointer flex items-center gap-3 text-white">
          Show Now <img src={arrowRight} alt="" />
        </button>
      </div>
      <div className="right w-[50%] h-screen flex flex-col justify-center items-center bg-hero bg-cover bg-center bg-no-repeat gap-6 pt-40 max-md:w-[100%] max-md:h-4/6 max-md:gap-12">
        <img src={shoe} alt="home-shoe" width={550} height={502} />
        <div className="thump flex items-center justify-center gap-2 max-md:m-[-30px]">
          {shoes.map((ele, i) => (
            <div
              className="border w-[150px] h-[150px] flex items-center justify-center bg-card bg-center bg-cover rounded-xl cursor-pointer max-md:w-[75px] max-md:h-[75px]"
              key={i}
              onClick={(e) => {
                setShoe(ele.bigShoe);
              }}
            >
              <img src={ele.thumbnail} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
