import React from "react";
import Header from "../components/SpecificNews/Header/Header";
import Cover from "../components/SpecificNews/Cover/Cover";
import Article from "../components/SpecificNews/Content/Article";
import NewsHeading from "../components/SpecificNews/NewsHeading/NewsHeading";
import data from "../data.json";

// CSS
import "../components/SpecificNews/Content/specificNews.css";
import Explore from "../components/SpecificNews/Explore/Explore";

const SpecificNews = () => {
  const { newsHeading, cover, article, genreral } = data;
  return (
    <div>
      <Header />
      <NewsHeading newsHeading={newsHeading} genreral={genreral} />
      <Cover cover={cover} />
      <Article article={article} />
      <Explore />
    </div>
  );
};

export default SpecificNews;
