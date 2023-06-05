import React from "react";
import "./category.scss"
import ProductCard from "../productCard/product-card";
import { Link, useNavigate } from "react-router-dom";
import More from "../more/more";

function Category({title,products}){
        const navigate=useNavigate()
        const rout=()=>{
            navigate(`/subcategory/${title}`)
        }
    return(
        <div className="category-preview-container" >
            <h2 className="parara">
                <span className="title" onClick={rout}>
                    <span className="left-arrow arr">
                    <i class="fa-solid fa-angles-left "></i>
                    </span>
                        {title.toUpperCase()}
                        <span className="right-arrow arr">
                    <i class="fa-solid fa-angles-right "></i>

                    </span>
                </span>
            </h2>
            <div className="preview">
            {products.filter((_,idx)=>idx<6).map((item)=>{
                return(
                    <ProductCard key={item.id} product={item} tite={title} />
                )
            })}
            <Link to={`/subcategory/${title}`}
            //  onClick={rout}
             >
            {/* <More  /> */}
            </Link>
            
            </div>
        </div>
    )
}export default Category