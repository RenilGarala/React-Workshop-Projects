import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import SecondSidebar from "../SecondSidebar";
import Header from "../Header";
import FirstSidebar from "./FirstSidebar";
import FourthSidebar from "./FourthSidebar";

const FourthLayout = () => {
  return (
    <div>
      <div className="layout">
        <Header />
        <div className="flex h-auto">
          <div className="w-9/12">
            <div className="w-full h-9/12 pb-16 mr-5">
              <Outlet />
            </div>
            <div className="h-3/12">
              <FourthSidebar />
            </div>
          </div>
          <div className="w-3/12">
            <FirstSidebar/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FourthLayout;
