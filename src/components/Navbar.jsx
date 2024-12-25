import React from "react";
import { headerLogo } from "../assets/images/index.js";
import { navLinks } from "../assets/constants.index.js";
import { hamburger } from "../assets/icons/index.js";
const Navbar = () => {
  return (
    <nav className="absolute z-10 w-full py-6 px-[3%] bg-transparent-400 flex justify-between items-center max-sm:py-3 max-sm:px-[4%]">
      <img
        src={headerLogo}
        alt="logo"
        width={100}
        className="max-[300px]:w-20"
      />
      <div className="links flex items-center gap-9 text-gray-700 max-sm:hidden">
        {navLinks.map((ele, i) => (
          <a href={ele.href} key={i}>
            {ele.label}
          </a>
        ))}
      </div>
      <a href="/" className="sign font-semibold max-sm:hidden">
        Sign in / Explore now
      </a>
      <a href="/" className="menu hidden max-sm:block max-sm:w-6">
        <img src={hamburger} alt="" width={30} />
      </a>
    </nav>
  );
};

export default Navbar;
