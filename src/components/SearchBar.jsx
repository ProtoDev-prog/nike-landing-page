import React from "react";

const SearchBar = () => {
  return (
    <div className="search border border-gray-500 p-4 w-[480px] flex items-center rounded-[50px] max-md:w-full max-md:p-2">
      <input
        type="text"
        className="flex-1 indent-2"
        placeholder="subscribe@nike.com"
      />
      <button className="bg-red-400 py-3 px-5 rounded-[25px] cursor-pointer text-white max-md:py-1 nmax-md:px-3">
        Sign Up
      </button>
    </div>
  );
};

export default SearchBar;
