import React from "react";
import { products } from "../assets/constants.index";
import { star } from "../assets/icons";
const Popular = () => {
  return (
    <div className="popular py-40 px-[3%] max-md:py-12">
      <h1 className="text-6xl max-md:text-4xl">
        Our <span className="text-red-400">Popular</span> Products
      </h1>
      <p className="my-8 text-gray-400 max-md:text-xl">
        Experience top-notch quality and style with our sought-after <br />{" "}
        selections. Discover a world of comfort, design, and value
      </p>
      <div className="products flex items-start justify-between gap-3 max-md:flex-col">
        {products.map((ele) => (
          <div className="card w-full">
            <div className="img-holder h-[100%]  bg-center bg-cover rounded-xl cursor-pointer max-md:w-[300px]  flex-1 ">
              <img src={ele.imgURL} alt="" />
            </div>
            <div className="details mt-7">
              <a href="#" className="flex items-center gap-1">
                <img src={star} alt="" />
                (4.5)
              </a>
              <h2 className="my-2 text-xl font-bold">{ele.name}</h2>
              <h2 className="text-xl text-red-400 font-semibold">
                {ele.price}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
