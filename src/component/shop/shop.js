import React, { useState,Fragment ,useParams} from "react";
import SHOP_DATA from "../../shop_data/data";
import { ProductContext } from "../contexte/product";
import { useContext } from "react";
import ProductCard from "../productCard/product-card";
import "./shop.scss"
import Category from "../category-preview/category-preview";
function Shop(){
    const {product}=useContext(ProductContext)
    const [arr_product,set_arr_product]=useState(product)
    return(
        <Fragment>
         <div className="shpe">
         {Object.keys(product).map((title) => {
            const item=product[title]
            return(
                <Category title={title} products={item}/>
            )
        })}
            </div>   

      </Fragment>
    )
}export default Shop