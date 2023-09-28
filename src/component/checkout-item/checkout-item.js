import React from "react";
import "./checkout-item.scss";
import { useContext } from "react";
import { CartContext } from "../contexte/cart";
import Button from "../button/button";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemfromCart, addItemToCard, removeItemfromCart } =
    useContext(CartContext);

  const clear = () => {
    clearItemfromCart(cartItem);
  };
  const removeItem = () => {
    if (quantity > 1) removeItemfromCart(cartItem);
  };
  const addItem = () => {
    if (quantity < 9) addItemToCard(cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="right-side">
        <span className="name"> اسم المنتج : {name} </span>
        <span className="quant">
          <span>الكمية &nbsp; &nbsp;</span>
          <span className="quantity">
            <div className="arrow" onClick={addItem}>
              {" "}
              <i class="fa-solid fa-plus"></i>
            </div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={removeItem}>
              <i class="fa-solid fa-minus"></i>
            </div>
          </span>
        </span>
        <span className="name"> اللون : {name} </span>
        <span className="name"> الحجم : {name} </span>
        <div>
          السعر :<span className="price"> {price}$ </span>
        </div>
      </div>
      <div className="rightright">
        <Button buttonType="delete" type="button" onClick={clear}>
          حذف المنتج
        </Button>
      </div>
    </div>
  );
}
export default CheckoutItem;
