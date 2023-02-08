import React from "react";
import "./cart-item.scss"

function CartItem({cartitem}){
    return(
        <div>
            <h2>{cartitem.name}</h2>
            {/* <span>{quantity}</span> */}
        </div>
    )
}export default CartItem