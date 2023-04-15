import React, { useState } from "react";
import Button from "../button/button";
import "./product-card.scss"
import { useContext } from "react";
import { CartContext } from "../contexte/cart";
import { PopupContext } from "../contexte/popup";
import Cartpopup from "../cart-popup/cart-popup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


function ProductCard({product,tite}){
    const {name, price , imageUrl,reate}=product
    const [title,setTitle]=useState(tite)
    const {addItemToCard}= useContext(CartContext)
    return(
                
                        <div className="product-card-container" >
                                <Link to={`/clicked/${tite}`} state={product}>
                                <img src={imageUrl} alt="" />
                                </Link>
                                <div className="footer">
                                    <div className="ti">
                                    <span className="name">{name}</span>
                                    <span className="cost">{price}$</span>
                                    </div>
                                    <div className="rere">
                                    <div className="starrating">
                                    <ReactStars
                                        count={5}
                                        size={20}
                                        value={reate}
                                        activeColor="#ffd700"
                                    />
                    </div>
                                    </div>

                                </div>
                            <Button buttonType="inverted" onClick={()=>addItemToCard(product)}>ADD TO CARD</Button>
                        </div>
               

        )
}
export default ProductCard