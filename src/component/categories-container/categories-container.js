import React from "react";
import { categories } from "../categories-name";
import Category from "../category-itme/category-itme";
import "./cate.scss"
function CategoriesContainer(){

    return(
        <div className="categories-container">
        {categories.map((element)=>{
          return(
            <Category item={element}/>
          )
        })}
        </div>
    )
}export default CategoriesContainer