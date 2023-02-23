import React from "react";
import { CartContext } from "../../contexte/cart";
import { useContext } from "react";
import CheckoutItem from "../../checkout-item/checkout-item";
import "./checkout.scss"
import Button from "../../button/button";


function Checkout(){

    const {cartItems,cartTotal}=useContext(CartContext)
    return(
        <>
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