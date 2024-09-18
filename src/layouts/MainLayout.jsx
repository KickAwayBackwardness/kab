import { Outlet } from "react-router-dom";

import React from "react";
import Audio from "../components/vendors/Audio";
import Frame from "../components/vendors/Frame/Frame";
import Humburger from "../components/vendors/Humburger";
import OverlayBackground from "../components/vendors/OverlayBackground";
import SideMenu from "../components/vendors/SideMenu";
import ScrollIndicator from "../components/vendors/ScrollIndicator";
import Footer from "../components/vendors/Footer/Footer";
// import Frame from "../components/vendors/Frame";

const MainLayout = () => {
  return (
    <>
      <Frame />
      <Humburger />
      <ScrollIndicator />
      <Outlet />
      <OverlayBackground />
      <SideMenu />
      <Footer />
      {/* <Audio />  */}
    </>
  );
};

export default MainLayout;
