import React from "react";
import Header from "../components/Newspaper/Header/Header";
import ListNews from "../components/Newspaper/ListNews/ListNews";
import MasterHeading from "../components/Newspaper/MasterHeading/MasterHeading";
import NOTD from "../components/Newspaper/NOTD/NOTD";
import LoadMore from "../components/Newspaper/ListNews/LoadMore";
import Continue from "../components/vendors/Continute/Continue";
import FakeScroll from "../utils/FakeScroll";

const Newspaper = () => {
  return (
    <>
      <Header />
      <MasterHeading />
      <NOTD />
      <ListNews />
      <LoadMore />
      <Continue />

      {/* fake scroll */}
      <FakeScroll />
    </>
  );
};

export default Newspaper;
