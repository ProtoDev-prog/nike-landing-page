import React from "react";
import { services } from "../assets/constants.index";
const Details = () => {
  return (
    <div className="details py-24 mx-[3%] flex gap-14  max-md:flex-col">
      {services.map((ele) => (
        <div className="flex-1 bg-white shadow-heavy rounded-xl py-16 px-10 w-full">
          <div className="holder h-[50px] w-[50px] flex items-center justify-center rounded-full bg-red-400">
            <img src={ele.imgURL} alt="" />
          </div>
          <h1 className="my-3 text-3xl font-bold">{ele.label}</h1>
          <p className="text-xl font-light text-gray-600">{ele.subtext}</p>
        </div>
      ))}
    </div>
  );
};

export default Details;
