import React, { useContext, useEffect, useState } from "react";
import { useParams ,useLocation} from "react-router-dom";
import ProductCard from "../productCard/product-card";
import "./sub-category.scss"
import { ProductContext } from "../contexte/product";


function SubCategory(){
    const location = useLocation()
    const {product}=useContext(ProductContext)
    const [pp,spp]=useState(product)
    const param=useParams()
    const titlee=param.title
    const [arr,setarr]=useState(product[titlee.toLowerCase()])

    const { pathname } = useLocation();
    useEffect(()=>{
            window.scrollTo(0, 0);
    },[pathname])
    
    return(
        <div className="category-preview-container">
            <h2>

                <span className="title-in-sub">
                    
                <span className="left-arrow arr">
                    <i class="fa-solid fa-angles-left "></i>
                    </span>
                    {titlee.toUpperCase()}
                
                
                <span className="right-arrow arr">
                    <i class="fa-solid fa-angles-right "></i>
                    </span>
                </span>
            </h2>
            <div className="preview-sub">
            {product[titlee.toLowerCase()]?.map((item)=>{
                return(
                    <ProductCard key={item.id} product={item} tite={titlee}/>
                )
            })}
            </div>

        </div>
    )
}export default SubCategory 