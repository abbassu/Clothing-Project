import React from "react";
// import "./checkout-item.scss"
import { useContext } from "react";
import { CartContext } from "../contexte/cart";
import "./sty.scss"
import Button from "../button/button";

function OrderItem({cartItem}){
    const {name,imageUrl,price,quantity}=cartItem
    const {clearItemfromCart,addItemToCard,removeItemfromCart}=useContext(CartContext)

    return(
        
        <div className="order-item">
            <div className="image-container-order">
                <img src={imageUrl} alt="" />
            </div>
                <div className="right-sideorder">
                <span className="name">{name} </span>
                <hr />
                <div className="quantity"> 
                    <span className="value">Quantity &nbsp; {quantity}</span>
                    </div>
                    <hr />
                <span className="price">Price : {price}$ </span>
                </div>
        </div>
    )
}export default OrderItem