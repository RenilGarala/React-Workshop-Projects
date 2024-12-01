import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import SecondSidebar from "./SecondSidebar";

const ThirdLayout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="flex h-screen">
          <div >
            <div className="w-3/12">
              <Sidebar />
            </div>

            <div className="w-3/12">
              <SecondSidebar />
            </div>
          </div>
          <div className="w-full mr-5">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ThirdLayout;
