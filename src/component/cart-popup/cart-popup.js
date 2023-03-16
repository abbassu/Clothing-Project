
import React from "react";
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


    const {addItemToCard}= useContext(CartContext)

    console.log("name",name," reate ",reate)


    const change=()=>{
        changeState(close)
    }
    const bub = Math.floor((Math.random() * 100) + 1);

    return(

        <div className="popup-cart-box">
            <div class="box-cart">
                <div className="name-of-product">
                    <div className="namename">
                    {name}
                    </div>
                    <img src={imageUrl} alt=""/>
                </div>
                
                <div className="rightsiderate">
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

                </div>

                <button  onClick={()=>addItemToCard(product)} >ADD TO CARD</button>
            </div>
        </div>
    )
}
export default Cartpopup