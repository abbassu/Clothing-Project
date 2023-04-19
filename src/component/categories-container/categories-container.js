import React,{useEffect} from "react";
import { categories } from "../categories-name";
import Category from "../category-itme/category-itme";
import "./cate.scss"
import { Routes,Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
function CategoriesContainer(){


  const { pathname } = useLocation();

  useEffect(()=>{
      window.scrollTo(0, 0);
  },[pathname])

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