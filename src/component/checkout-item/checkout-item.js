import React from "react";
import "./checkout-item.scss"
import { useContext } from "react";
import { CartContext } from "../contexte/cart";

function CheckoutItem({cartItem}){
    const {name,imageUrl,price,quantity}=cartItem
    const {clearItemfromCart,addItemToCard,removeItemfromCart}=useContext(CartContext)

    const clear=()=>{
        clearItemfromCart(cartItem)
    }
    const removeItem=()=>{
        removeItemfromCart(cartItem)
    }
    const addItem=()=>{
        addItemToCard(cartItem)
    }
    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>

            <span className="name"> {name} </span>
            <span className="quantity"> 
            
            <div className="arrow" onClick={removeItem} > &#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={addItem}> &#10095;</div>
            </span>
            <span className="price"> {price} </span>
            <div className="remove-button" onClick={clear}>&#10005;</div>

        </div>
    )
}export default CheckoutItem