import React, { useState } from "react";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.scss";
import { Global } from "../../contexte/usercontext";
import logo from "./ve.jpg";
import { SingOUtAuth } from "../../../utils/firebase/firebase";
import { async } from "@firebase/util";
import Cart from "../../cart/cart";
import CartDropdown from "../../cart-dropdown/cart-dropdown";
import { CartContext } from "../../contexte/cart";
function Navbar() {
  const { currentUser, setCurrentUser } = useContext(Global);
  const [opeen, setnotopeen] = useState(true);

  const { isOpen } = useContext(CartContext);
  async function handleSignOut() {
    const tt = await SingOUtAuth();
    setCurrentUser(null);
  }
  console.log("now now ", currentUser);
  return (
    <>
      <div className="NavbarSection">
        <div className="nav-links-container">
          <Cart />
          <div
            className={` ${opeen ? "" : "jal"} links  `}
            onClick={() => {
              setnotopeen(!opeen);
            }}
          >
            <Link className="nav-link" to={"operation"}>
              {" "}
              عمليات
            </Link>
            <Link className="nav-link" to={"orders"}>
              طلبات{" "}
            </Link>

            <Link className="nav-link" to={"/"}>
              {" "}
              الرئيسي{" "}
            </Link>
            <Link className="nav-link" to={"shop/catebar"}>
              {" "}
              المنتجات
            </Link>

            {/* <Link className="nav-linkk" to={"auth"}>
              {" "}
              تسجيل الدخول
            </Link>

            <span className="nav-linkk" onClick={handleSignOut}>
              {" "}
              تسجيل خروج
            </span> */}

            {!currentUser ? "" : ""}
          </div>

          <div className="bars">
            <i
              className="fa-solid fa-bars"
              onClick={() => {
                setnotopeen(!opeen);
              }}
            ></i>
          </div>
        </div>

        {isOpen && <CartDropdown />}
        <Link className="logo-container" to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
    </>
  );
}
export default Navbar;
