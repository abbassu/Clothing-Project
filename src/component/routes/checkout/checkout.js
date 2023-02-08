import React from "react";
import { CartContext } from "../../contexte/cart";
import { useContext } from "react";
import CheckoutItem from "../../checkout-item/checkout-item";
import "./checkout.scss"


function Checkout(){
    const {cartItems,cartTotal}=useContext(CartContext)
    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
                {cartItems.map((cartItem)=>{
                    // const {id,name,quantity}=cartItem
                    return(
                        <CheckoutItem cartItem={cartItem}/>
                        // <div key={id}>
                        //     <h2>{name}</h2>
                        //     <span>{quantity}</span>
                        //     <br />
                        //     <span onClick={()=>{removeItemfromCart(cartItem)}}>decrement</span>
                        //     <br />
                        //     <span onClick={()=>{addItemToCard(cartItem)}}>increment</span>
                        // </div>
                    )
                })}
            <span className="total"> Total : {cartTotal}</span>
        </div>
    )
} export default Checkout