
import React, { useState } from "react";
import "./cart-popup.scss"
import { PopupCartContext } from "../contexte/cart-popup";
import { useContext } from "react";
import Button from "../button/button";
import { useLocation, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import { CartContext } from "../contexte/cart";


function Cartpopup(){
    const {close,changeState}=useContext(PopupCartContext)
    const {prod}=useParams()
    const {name, price , imageUrl,reate}=useLocation().state
    const product=useLocation().state
    const {clearItemfromCart,cartItems,addAllItemToCard,addItemToCard,removeItemfromCart}=useContext(CartContext)
    const {quantity}=product
    
    function addAllTalab(){
        addAllItemToCard(product,ss)
    }

    const found = cartItems.find(element => element.id===product.id);
    if(found?.quantity){
        // sss(found.quantity)
    }
    const [ss,sss]=useState( 1 )

    function upState(){
        sss(ss+1)
    }
    function downState(){
        sss(ss-1)
    }

    console.log("name",name," reate ",reate)
    const clear=()=>{
        clearItemfromCart(product)
    }
    const removeItem=()=>{
        removeItemfromCart(product)
    }
    const addItem=()=>{
        addItemToCard(product)
    }

    const change=()=>{
        changeState(close)
    }
    const bub = Math.floor((Math.random() * 100) + 1);

    return(

        <div className="popup-cart-box">
            <div class="box-cart">
                <div className="name-of-product">

                    <img src={imageUrl} alt=""/>
                </div>
                
                <div className="rightsiderate">
                    <div className="namename">
                    {name}
                    </div>
                    <div className="starrating">
                        <ReactStars
                            count={5}
                            size={34}
                            value={reate}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="num-of-rate">
                      {bub} Rating 
                      <hr />
                      Price {price}$
                    </div>

                    <div className="right-side">
                <span className="name"> {name} </span>
                <div className="quantity"> 
                    <div className="arrow" onClick={downState} >Quantity &nbsp;  &#10094;</div>
                    <span className="value">
                    {ss}
                        </span>
                    <div className="arrow" onClick={upState}> &#10095;</div>
                    </div>
                <span className="price">Price : {price}$ </span>
                </div>

                    <Button onClick={()=>addAllTalab()} >ADD TOo CARD</Button>

                </div>

            </div>
        </div>
    )
}
export default Cartpopup