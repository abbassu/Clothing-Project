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
      <div className="navigationn">
        <Link className="logo-container" to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="nav-links-containerrr">
          <div
            className={`linkss  ${opeen ? "" : "jal"} `}
            onClick={() => {
              setnotopeen(!opeen);
            }}
          >
            {currentUser?.uid === "upCC9gHfwcQQFN2ObsYXgHKg6193" ? (
              <>
                <Link className="nav-linkk" to={"operation"}>
                  {" "}
                  Operation
                </Link>
                <Link className="nav-linkk" to={"orders"}>
                  Orders{" "}
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-linkk" to={"/"}>
                  {" "}
                  HOME{" "}
                </Link>
                <Link className="nav-linkk" to={"shop/catebar"}>
                  {" "}
                  SHOP
                </Link>
              </>
            )}

            {!currentUser ? (
              <Link className="nav-linkk" to={"auth"}>
                {" "}
                SIGN IN
              </Link>
            ) : (
              <span className="nav-linkk" onClick={handleSignOut}>
                {" "}
                SIGN OUT
              </span>
            )}
          </div>

          {currentUser?.uid === "upCC9gHfwcQQFN2ObsYXgHKg6193" ? (
            <></>
          ) : (
            <>
              <Cart />
            </>
          )}

          <i
            className="fa-solid fa-bars"
            onClick={() => {
              setnotopeen(!opeen);
            }}
          ></i>
        </div>

        {isOpen && <CartDropdown />}
      </div>
    </>
  );
}
export default Navbar;
