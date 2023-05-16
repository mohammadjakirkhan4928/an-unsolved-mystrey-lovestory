import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Banner from "../pages/banner/Banner";
import Tabs from "../pages/tabs/Tabs";

const Main = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Tabs></Tabs>
     <Banner></Banner>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};

export default Main;
