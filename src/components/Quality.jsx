import React from "react";
import { shoe8 } from "../assets/images";
const Quality = () => {
  return (
    <div className="quality py-24 px-[3%] flex items-center max-md:flex-col max-md:py-20 gap-4">
      <div className="left w-[100%] ">
        <h1 className="text-6xl max-md:text-4xl">
          We Provide You <span className="text-red-400">Super Quality</span>{" "}
          Shoes
        </h1>
        <p className="my-6 text-lg leading-7 max-md:text-base">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
          <br />
          <br />
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <button className="py-4 px-8 bg-red-400 rounded-[25px] cursor-pointer text-white max-md:py-2 max-md:px-4">
          View Details
        </button>
      </div>
      <div className="right w-[100%]">
        <img src={shoe8} alt="" className="w-[100%]" />
      </div>
    </div>
  );
};

export default Quality;
