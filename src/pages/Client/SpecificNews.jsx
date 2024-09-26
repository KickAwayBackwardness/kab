import React from "react";
import Header from "../../components/SpecificNews/Header/Header";
import Cover from "../../components/SpecificNews/Cover/Cover";
import Article from "../../components/SpecificNews/Content/Article";
import NewsHeading from "../../components/SpecificNews/NewsHeading/NewsHeading";

// CSS
import "../../components/SpecificNews/Content/specificNews.css";
import Explore from "../../components/SpecificNews/Explore/Explore";

const SpecificNews = () => {
  return (
    <div>
      <Header />
      <NewsHeading />
      <Cover />
      <Article />
      <Explore />
    </div>
  );
};

export default SpecificNews;
