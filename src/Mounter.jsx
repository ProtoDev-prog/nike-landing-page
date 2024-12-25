import React from "react";
import Home from "./sections/Home";
import Popular from "./sections/Popular";
import Quality from "./components/Quality";
import Details from "./sections/Details";
import Offer from "./sections/Offer";
import Review from "./sections/Review";
import NewsLetter from "./sections/NewsLetter";
import Footer from "./sections/Footer";
const Mounter = () => {
  return (
    <>
      <Home />
      <Popular />
      <Quality />
      <Details />
      <Offer />
      <Review />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Mounter;
