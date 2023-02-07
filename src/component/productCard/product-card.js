import React from "react";
import Button from "../button/button";
import "./product-card.scss"

function ProductCard({product}){
    const {name, price , imageUrl}=product
    return(
        <div className="product-card-container">
                <img src={imageUrl} alt="" />
                <div className="footer">
                    <span className="name">{name}</span>
                    <span className="cost">{price}</span>
                </div>
            <Button buttonType="inverted">ADD TO CARD</Button>
        </div>
        )
}
export default ProductCard