import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Navbar from "../routes/navbar/navbar";
import "./layout.scss"
function Layout(){
    return(
        <div className="layout">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Layout