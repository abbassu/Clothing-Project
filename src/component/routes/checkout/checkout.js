import React from "react";
import { CartContext } from "../../contexte/cart";
import { useContext } from "react";
import CheckoutItem from "../../checkout-item/checkout-item";
import { PopupContext } from "../../contexte/popup";
import "./checkout.scss"
import Button from "../../button/button";
import Popup from "../../popup/popup";


function Checkout(){

    const {cartItems,cartTotal}=useContext(CartContext)
    const {close,changeState}=useContext(PopupContext)
    console.log("incheckout  ",close)


    return(
        <>
        {close ? <Popup/> : "" }
                <div className="calcolater">
            Bill Page
        </div>
        <div className="checkout-container">



            {cartItems.map((cartItem)=>{
                return(
                    <CheckoutItem cartItem={cartItem}/>
                )
            })}
        <div className="lastc">
            <span className="total"> Total : {cartTotal}$</span>
            {cartTotal >0 ? <Button buttonType="google" >Confirm</Button>: ""}
            
        </div>
        </div>
        </>

    )
} export default Checkout