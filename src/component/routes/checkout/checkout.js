import React, { useState } from "react";
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
import FormInput from "../../fom-input/form-input";


const defaultFields={
    street:'',
    phone:'',
    city:'',
    name:''
}

function Checkout(){
    const {currentUser,setCurrentUser}=useContext(Global)
    const [view,setview]=useState(false)
    const {cartItems,cartTotal,clearItemCart}=useContext(CartContext)
    const {close,changeState,changeStateFalse}=useContext(PopupContext)

    const [fields,setfields]=useState(defaultFields)

    const {street,phone,city,name}=fields

    function handleChange(event){
        const {name,value }=event.target
        setfields({...fields,[name]:value})
    }

    function clear(){
        setfields(defaultFields)
        clearItemCart()
    }

    function ff(){
        if(currentUser){

            if(street!=="" && phone !=='' && city !==''){
                let currentDate = new Date().toJSON().slice(0, 10);
                addtalabat("orders",cartItems,currentUser?.uid,cartTotal,city,phone,street,name,currentDate)
                clear()
            }



            else{
                alert("please enter all information")
            }


        }
        else {
            setview(true)
            changeStateFalse()
        }
    }


    console.log("currentUser",currentUser)


    return(
        <>
        
        {  close ? "" : <Popup/> }
                <div className="calcolater">
            Order Page
        </div>
        <div className="checkout-container">
            {cartItems.map((cartItem)=>{
                return(
                    <CheckoutItem cartItem={cartItem}/>
                )
            })}

        <div className="moreinfo">
            <h2>
                For Delivery Service
            </h2>
        <FormInput 
                    labelName="Name" 
                    optionInput={
                        {
                            type:"text",
                            required:true,
                            onChange:handleChange,
                            name:"name",
                            value:name
                        }
                    }
                />

                
<FormInput 
                    labelName="Phone" 
                    optionInput={
                        {
                            type:"text",
                            required:true,
                            onChange:handleChange,
                            name:"phone",
                            value:phone
                        }
                    }
                />

<FormInput 
                    labelName="City" 
                    optionInput={
                        {
                            type:"text",
                            required:true,
                            onChange:handleChange,
                            name:"city",
                            value:city
                        }
                    }
                />

        <FormInput 
                    labelName="Street" 
                    optionInput={
                        {
                            type:"text",
                            required:true,
                            onChange:handleChange,
                            name:"street",
                            value:street
                        }
                    }
                />

        </div>
        <div className="lastc">



            <span className="total"> Total : {cartTotal}$</span>
            {cartTotal >0 ? <Button buttonType="google" onClick={ff} >Confirm</Button>: ""}
            
        </div>
        </div>
        </>

    )
} export default Checkout