import React from "react";
import Button from "../button/button";
import "./product-card.scss"
import { useContext } from "react";
import { CartContext } from "../contexte/cart";
import { PopupContext } from "../contexte/popup";
import Cartpopup from "../cart-popup/cart-popup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function ProductCard({product}){
    const {name, price , imageUrl}=product
    const {addItemToCard}= useContext(CartContext)
    const nav=useNavigate()
    

    function aa(){
        console.log("hhhhhh",product)
    }

    return(
        <div className="allpropro">
                <Link to={`/clicked/${'kkk121'}`} state={product}>
                        <div className="product-card-container" onClick={aa}>
                                <img src={imageUrl} alt="" />
                                <div className="footer">
                                    <span className="name">{name}</span>
                                    <span className="cost">{price}$</span>
                                </div>
                            <Button buttonType="inverted" onClick={()=>addItemToCard(product)}>ADD TO CARD</Button>
                        </div>
                </Link>
        </div>

        )
}
export default ProductCard