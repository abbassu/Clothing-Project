import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Navbar from "../routes/navbar/navbar";
import "./layout.scss";
import TestFire from "../testfire/tesfire";
import AddItem from "../additem/additem";
import EditItem from "../edititem/edititem";
import DeleteItem from "../deleteitem/deleteitem";
import HomePage from "../homepage/HomePage";
import Test from "../test/Test";
function Layout() {
  return (
    <div className="layout">
      <Navbar />

      <div className="sublay">
        <Outlet />
      </div>
      <Footer className="forr" />
    </div>
  );
}
export default Layout;
