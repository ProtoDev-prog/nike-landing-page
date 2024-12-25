import React from "react";
import { footerLogo } from "../assets/images/index";
import { socialMedia, footerLinks } from "../assets/constants.index";
const Footer = () => {
  return (
    <div className="footer bg-black pt-24 pb-12 px-[3%] text-white">
      <div className="top flex items-start gap-24 mb-14 max-md:flex-col">
        <div className="left flex-1 flex flex-col gap-3">
          <img src={footerLogo} alt="" width={150} />
          <p className="max-md:text-base text-xl leading-7 text-gray-500">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="social-links flex items-center gap-2 mt-3">
            {socialMedia.map((ele) => (
              <div className="bg-white h-[40px] rounded-full w-[40px] flex items-center justify-center cursor-pointer">
                <img src={ele.src} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="right flex-[2] flex gap-3 max-md:flex-wrap max-md:gap-6">
          {footerLinks.map((ele) => (
            <div className="flex flex-col gap-3 w-full flex-1">
              <h4 className="text-2xl max-md:text-lg">{ele.title}</h4>
              <div className="links flex flex-col gap-2">
                {ele.links.map((links) => (
                  <a
                    href={links.link}
                    className="text-lg text-gray-500 max-md:text-sm"
                  >
                    {links.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="copy flex items-center justify-between max-md:flex-col max-md:text-center">
        <a href="/" className="text-lg max-md:text-base">
          &copy; Copyright. All rights reserved Made By 💕 Akash Ayyappan
        </a>
        <a href="/" className="text-lg max-md:text-base">
          Terms & Conditions
        </a>
      </div>
    </div>
  );
};

export default Footer;
