
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
    

    console.log("propssesesese",prod)

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
                      Price &nbsp; {price}$  &nbsp; for 1 Item
                    </div>
                    <div className="right-side">
                    <div className="quantity"> 
                            <div className="arrow minus" onClick={downState} > 
                            _
                            
                            </div>

                            <span className="value">
                            {ss}
                            </span>
                            
                            <div className="arrow opper" onClick={upState}>
                                +
                            </div>
                    </div>
                </div>
                    <button onClick={()=>addAllTalab()} >ADD TOo CARD</button>
                </div>
            </div>

            {/* <div className="lefleft">
                mam
            </div> */}



        </div>
    )
}
export default Cartpopup