import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../productCard/product-card";
import "./sub-category.scss"
import { ProductContext } from "../contexte/product";


function SubCategory(){
    const {product}=useContext(ProductContext)
    const [pp,spp]=useState(product)
    const param=useParams()
    const titlee=param.title
    const [arr,setarr]=useState(product[titlee.toLowerCase()])
    console.log("ararrrrrrrrrrrrrrrrrrrrrrrr",arr)

    console.log("params",param.title,",,,,,",product,",,,,,",titlee)
    return(
        <div className="category-preview-container">
            <h2>
                <span className="title-in-sub">{titlee.toUpperCase()}</span>
            </h2>
            <div className="preview-sub">
            {product[titlee.toLowerCase()]?.map((item)=>{
                return(
                    <ProductCard key={item.id} product={item}/>
                )
            })}
            </div>

        </div>
    )
}export default SubCategory 