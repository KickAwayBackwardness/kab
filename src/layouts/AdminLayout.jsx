import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// css
import "../components/ADMIN/admin.css";
import Footer from "../components/ADMIN/Footer/Footer";
import Header from "../components/ADMIN/Header/Header";
import NewPost from "../components/ADMIN/SubMenu/NewPost";

const AdminLayout = () => {
  const { pathname } = useLocation();
  const renderSubHeader = () => {
    // if (pathname.replaceAll("/", "") === "") {
    //   return <HomeSubHeader />;
    // }

    if (pathname.includes("admin")) {
      return <NewPost />;
    }

    // if (pathname.includes("settings")) {
    //   return <SettingSubHeader />;
    // }

    // if (pathname.includes("chi-tiet")) {
    //   return <DetailSubHeader />;
    // }
  };

  useEffect(() => {
    pathname.includes("admin") &&
      document.querySelector("html").classList.add("admin");
  });
  return (
    <main>
      <Header />
      <main className="mt-[50px] mb-[50px]">
        <Outlet />
      </main>
      <Footer />
      {renderSubHeader()}
    </main>
  );
};

export default AdminLayout;
