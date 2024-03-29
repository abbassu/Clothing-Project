import React from "react";
import "./cart-dropdown.scss";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { CartContext } from "../contexte/cart";
import { useNavigate } from "react-router-dom";
function CartDropdown() {
  const { cartItems, setIsOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const closePage = () => {
    setIsOpen(false);
  };

  const goToCheckout = () => {
    closePage();
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="close" onClick={closePage}>
        ✕
      </div>
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem cartitem={item} />;
        })}
      </div>
      <Button buttonType="inverted" onClick={goToCheckout}>
        قائمة المشتريات
      </Button>
    </div>
  );
}
export default CartDropdown;
