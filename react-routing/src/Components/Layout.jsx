import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import SecondSidebar from "./SecondSidebar";
import FourthFooter from "./layoutFour/FourthFooter";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="flex h-screen">
          <div className="w-3/12">
            <Sidebar />
          </div>
          <div className="w-full mr-5">
            <Outlet />
          </div>
          <div className="w-3/12">
            <SecondSidebar />
          </div>
        </div>
        <FourthFooter/>
      </div>
    </>
  );
};

export default Layout;
