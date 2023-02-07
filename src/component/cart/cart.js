import React from "react";
import "./cart.scss"
import {ReactComponent as ShoppingIcon} from "./../../photo-logo/shopping-bag.svg"

function Cart(){
    return(
        <div className="cart-icon-container">
            <ShoppingIcon className="shopping-icon"> </ShoppingIcon>
            <span className="item-count">0</span>
        </div>
    )
}export default Cart