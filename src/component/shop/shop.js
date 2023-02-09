import React, { useState,Fragment } from "react";
import SHOP_DATA from "../../shop_data/data";
import { ProductContext } from "../contexte/product";
import { useContext } from "react";
import ProductCard from "../productCard/product-card";
import "./shop.scss"

function Shop(){

    const {product}=useContext(ProductContext)
    const [arr_product,set_arr_product]=useState(product)
    console.log("FFFFFFFFFFFFFF",product)
    return(


        
        <Fragment>
        {Object.keys(product).map((title) => (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className='products-container'>
              {product[title].map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </Fragment>
        ))}
      </Fragment>
        // <div className="proucts-container">
        //     {product.map((item)=>{
        //         return(
        //             <>
        //             <ProductCard product={item}></ProductCard>
        //             </>
                    
        //         )
        //     })}
        // </div>
    )
}export default Shop