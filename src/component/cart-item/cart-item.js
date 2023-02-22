import React from "react";
import "./cart-item.scss"

function CartItem({cartitem}){
    const {name,quantity,imageUrl,price}=cartitem
    return(
        <div className="cart-item-container">
            <img src={imageUrl} alt="" /> 
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} X {price}
                </span>
            </div>
        </div>
    )
}export default CartItem