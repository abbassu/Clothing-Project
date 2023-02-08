import React, { useContext } from "react";
import "./cart.scss"
import {ReactComponent as ShoppingIcon} from "./../../photo-logo/shopping-bag.svg"
import { CartContext } from "../contexte/cart";

function Cart(){

    const {isOpen,setIsOpen,cartCount}=useContext(CartContext)
    console.log("firstttt,",isOpen)
    const toggle=()=>{
        // console.log("KKKKK",vvv)
        setIsOpen(!isOpen)
    }


    return(
        <div className="cart-icon-container" onClick={toggle}>
            <ShoppingIcon className="shopping-icon"> </ShoppingIcon>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}export default Cart