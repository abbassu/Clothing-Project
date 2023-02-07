import React from "react";
import Data from "./../../shop_data/data.json"
import { ProductContext } from "../contexte/product";
import { useContext } from "react";
import ProductCard from "../productCard/product-card";
import "./shop.scss"

function Shop(){

    const {product}=useContext(ProductContext)
    return(
        <div className="proucts-container">
            {product.map((item)=>{
                return(
                    <>
                    <ProductCard product={item}></ProductCard>
                    </>
                    
                )
            })}
        </div>
    )
}export default Shop