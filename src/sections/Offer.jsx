import React from "react";
import offer from "../assets/images/offer.svg";
import { arrowRight } from "../assets/icons";
const Offer = () => {
  return (
    <div className="offer py-20 px-[3%]  flex items-center gap-3 max-md:flex-col-reverse max-md:py-10">
      <div className="left flex-1 ">
        <img src={offer} alt="" width={773} />
      </div>
      <div className="right flex-1">
        <h1 className="text-5xl max-md:text-4xl">
          <span className="text-red-400">Special</span> Offer
        </h1>
        <p className="my-8 text-xl leading-8 max-md:text-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
          <br />
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="btns flex items-center gap-2">
          <button className="bg-red-400 py-3 px-5 rounded-[25px] cursor-pointer flex items-center gap-3 text-white">
            Shop now <img src={arrowRight} alt="" />
          </button>
          <button className="py-3 px-5 rounded-[25px] border cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
