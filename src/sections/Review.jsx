import React from "react";
import { reviews } from "../assets/constants.index";
import { star } from "../assets/icons";
const Review = () => {
  return (
    <div className="review py-24 px-[3%] bg-gray-200">
      <h1 className="text-center py-4 text-5xl max-md:text-4xl">
        What Our <span className="text-red-400">Customers</span> Say?
      </h1>
      <p className="text-center text-gray-400 text-xl max-md:text-lg">
        Hear genuine stories from our satisfied customers about <br /> their
        exceptional experiences with us.
      </p>
      <div className="testi flex items-center mt-20 justify-evenly gap-16 max-md:flex-col ">
        {reviews.map((ele) => (
          <div className="text-center flex-1 flex flex-col items-center gap-3 max-md:w-full ">
            <img
              src={ele.imgURL}
              alt=""
              width={100}
              className="rounded-full mx-auto"
            />
            <p className="text-xl text-gray-800">{ele.feedback}</p>
            <a href="#" className="flex items-center gap-1 ">
              <img src={star} alt="" />
              (4.5)
            </a>
            <h2 className="text-2xl font-bold">{ele.customerName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
