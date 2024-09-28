import React from "react";
import Header from "../../components/Client/Home/Header";
import Hero from "../../components/Client/Home/Hero";
import Chapter1 from "../../components/Client/Home/Chapter1";
import Chapter2 from "../../components/Client/Home/Chapter2";
import BackGround from "../../components/Client/Home/BackGround";

const Home = () => {
  return (
    <>
      <BackGround />
      <div>
        <div className="absolute max-w-main-content w-full top-[0] right-[0]">
          <Header />
        </div>
        <div className=" main absolute max-w-main-content w-full h-main-content top-[50px] right-[0] overflow-scroll">
          <Hero />
          <Chapter1 />
          <Chapter2 />
        </div>
        <div className="h-[100vh]"></div>
      </div>
    </>
  );
};

export default Home;
