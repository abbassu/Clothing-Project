import React from "react";
import { Outlet,Link } from "react-router-dom";
import {ReactComponent as Logo} from "./../../../photo-logo/crown.svg"
import "./navbar.scss"
// import "./in.css"

function Navbar(){
    return(
    <>
          <div className="navigation">
            <Link className="logo-container" to={"/"}>
                <Logo/>
            </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to={"shop"}> SHOP</Link>
            <Link className="nav-link" to={"auth"}> SIGN IN</Link>
        </div>
        
      </div>
      <Outlet/>

    </>

    )
}
export default Navbar
