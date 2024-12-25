import React from "react";
import SearchBar from "../components/SearchBar";

const NewsLetter = () => {
  return (
    <div className="py-20 px-[3%] bg-white flex items-center justify-between max-md:flex-col max-md:gap-12">
      <h1 className="text-4xl font-bold leading-10 tracking-wide w-[480px] max-md:w-full max-md:text-2xl">
        Sign Up for <span className="text-red-400">Updates</span> & Newsletter
      </h1>
      <SearchBar />
    </div>
  );
};

export default NewsLetter;
