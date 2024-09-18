import React from "react";
import Header from "../components/SpecificNews/Header/Header";
import Cover from "../components/SpecificNews/Cover/Cover";
import Article from "../components/SpecificNews/Content/Article";
import NewsHeading from "../components/SpecificNews/NewsHeading/NewsHeading";

const SpecificNews = () => {
  return (
    <div className="">
      <Header />
      <NewsHeading />
      <Cover />
      <Article />
    </div>
  );
};

export default SpecificNews;
