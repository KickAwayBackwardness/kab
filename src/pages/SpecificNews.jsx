import React from "react";
import Header from "../components/SpecificNews/Header/Header";
import Cover from "../components/SpecificNews/Cover/Cover";
import Content from "../components/SpecificNews/Content/Content";
import NewsHeading from "../components/SpecificNews/NewsHeading/NewsHeading";

const SpecificNews = () => {
  return (
    <div className="">
      <Header />
      <NewsHeading />
      <Cover />
      <Content />
    </div>
  );
};

export default SpecificNews;
