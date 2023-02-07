import React from "react";
import { useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import {ReactComponent as Logo} from "./../../../photo-logo/crown.svg"
import "./navbar.scss"
import { Global } from "../../contexte/usercontext";
import { SingOUtAuth } from "../../../utils/firebase/firebase";
import { async } from "@firebase/util";
import Cart from "../../cart/cart";
// import "./in.css"

function Navbar(){
    const {currentUser,setCurrentUser}=useContext(Global)
   async function handleSignOut(){
      const tt= await SingOUtAuth()
      console.log("ttttttttttttttttttttttttttt",tt)
       setCurrentUser(null)
       
    }
    
    console.log("nav----------",currentUser)

    return(
    <>
    
          <div className="navigation">
            <Link className="logo-container" to={"/"}>
                <Logo/>
            </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to={"shop"}> SHOP</Link>
            {currentUser?
            <span className="nav-link" onClick={handleSignOut}> SIGN OUT</span>:<Link className="nav-link" to={"auth"}> SIGN IN</Link>
            }
            {/* <Link className="nav-link" to={"auth"}> SIGN IN</Link> */}
            <Cart/>
        </div>
        
      </div>
      <Outlet/>

    </>

    )
}
export default Navbar
