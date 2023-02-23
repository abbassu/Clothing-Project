import React from "react";
import "./checkout-item.scss"
import { useContext } from "react";
import { CartContext } from "../contexte/cart";
import Button from "../button/button";

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
                <div className="right-side">
                <span className="name"> {name} </span>
                <div className="quantity"> 
                    <div className="arrow" onClick={removeItem} >Quantity &nbsp;  &#10094;</div>
                    <span className="value">{quantity}</span>
                    <div className="arrow" onClick={addItem}> &#10095;</div>
                    </div>
                <span className="price">Price : {price}$ </span>
                </div>
                <div className="rightright">
                    <Button buttonType="delete"  type="button" onClick={clear}>Delete</Button>
                </div>
               

        </div>
    )
}export default CheckoutItem