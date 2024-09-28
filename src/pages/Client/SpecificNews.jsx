import React from "react";
import Header from "../../components/Client/SpecificNews/Header/Header";
import Cover from "../../components/Client/SpecificNews/Cover/Cover";
import Article from "../../components/Client/SpecificNews/Content/Article";
import NewsHeading from "../../components/Client/SpecificNews/NewsHeading/NewsHeading";
import data from "../../data.json";

// CSS
import "../../components/Client/SpecificNews/Content/specificNews.css";
import Explore from "../../components/Client/SpecificNews/Explore/Explore";

const SpecificNews = () => {
  const { newsHeading, cover, article } = data;
  return (
    <div>
      <Header />
      <NewsHeading newsHeading={newsHeading} />
      <Cover cover={cover} />
      <Article article={article} />
      <Explore />
    </div>
  );
};

export default SpecificNews;
