import React from "react";
import { CartContext } from "../../contexte/cart";
import { useContext } from "react";
import CheckoutItem from "../../checkout-item/checkout-item";
import { PopupContext } from "../../contexte/popup";
import "./checkout.scss"
import Button from "../../button/button";
import Popup from "../../popup/popup";
import { addtalabat } from "../../../utils/firebase/firebase";
import TESTDAT from "../../../shop_data/testdata";
import { Global } from "../../contexte/usercontext";
import { gettalabat } from "../../../utils/firebase/firebase";
function Checkout(){
    const {currentUser,setCurrentUser}=useContext(Global)
    const {cartItems,cartTotal,clearItemCart}=useContext(CartContext)
    const {close,changeState}=useContext(PopupContext)
    console.log("incheckout  ",close, currentUser?.uid,'hhhhhhhhhhhhhhhhhh',cartItems)
    // const uid=currentUser.uid;


    

    function ff(){
        // gettalabat()
        addtalabat("tale",{cartItems},currentUser?.uid,cartTotal)
        // clearItemCart()
    }

    return(
        <>
        {!close ? <Popup/> : "" }
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
            {cartTotal >0 ? <Button buttonType="google" onClick={ff} >Confirm</Button>: ""}
            
        </div>
        </div>
        </>

    )
} export default Checkout