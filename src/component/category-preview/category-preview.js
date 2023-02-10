import React from "react";
import "./category.scss"
import ProductCard from "../productCard/product-card";
import { useNavigate } from "react-router-dom";



function Category({title,products}){

        const navigate=useNavigate()

        const rout=()=>{
            navigate(`/subcategory/${title}`)
            // navigate(`auth`)
        }

    return(
        <div className="category-preview-container" >
            <h2>
                <span className="title" onClick={rout}>{title.toUpperCase()}dd</span>
            </h2>
            <div className="preview">
            {products.filter((_,idx)=>idx<4).map((item)=>{
                return(
                    <ProductCard key={item.id} product={item}/>
                )
            })}
            </div>

        </div>
    )
}export default Category