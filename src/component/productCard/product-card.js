import React from "react";
import Button from "../button/button";
import "./product-card.scss"
import { useContext } from "react";
import { CartContext } from "../contexte/cart";

function ProductCard({product}){
    const {name, price , imageUrl}=product
    const {addItemToCard}= useContext(CartContext)

    function aa(){
        console.log("fffff")
    }

    return(
        <div className="product-card-container" >
            <div className="has_image">

            </div>
                <img src={imageUrl} alt="" />
                <div className="footer">
                    <span className="name">{name}</span>
                    <span className="cost">{price}</span>
                </div>
            <Button buttonType="inverted" onClick={()=>addItemToCard(product)}>ADD TO CARD</Button>
        </div>
        )
}
export default ProductCard