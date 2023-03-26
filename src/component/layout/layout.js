import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Navbar from "../routes/navbar/navbar";
import "./layout.scss"
import TestFire from "../testfire/tesfire";
import AddItem from "../additem/additem";
function Layout(){
    return(
        <div className="layout">
            <div className="sublay">
            <Navbar/>
         <AddItem/> 
             

{/* <TestFire/> */}

            <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}
export default Layout