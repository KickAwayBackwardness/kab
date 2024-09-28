import React from "react";
import Header from "../../components/Client/Newspaper/Header/Header";
import ListNews from "../../components/Client/Newspaper/ListNews/ListNews";
import MasterHeading from "../../components/Client/Newspaper/MasterHeading/MasterHeading";
import NOTD from "../../components/Client/Newspaper/NOTD/NOTD";
import LoadMore from "../../components/Client/Newspaper/ListNews/LoadMore";
import Continue from "../../components/vendors/Continute/Continue";
import FakeScroll from "../../utils/FakeScroll";

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
