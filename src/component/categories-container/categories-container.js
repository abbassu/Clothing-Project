import React,{useEffect} from "react";
import { categories } from "../categories-name";
import Category from "../category-itme/category-itme";
import "./cate.scss"
import { Routes,Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Test from "../test/Test";
import HomePage from "../homepage/HomePage";
function CategoriesContainer(){


  const { pathname } = useLocation();

  useEffect(()=>{
      window.scrollTo(0, 0);
  },[pathname])

    return(

        <div className="categories-container">
          <div className="lolo">
            <Test/>
          </div>
          <HomePage/>

      {/* <div className="fofofo">
        <h2 className="parara">
          <span className="title" >

              Categories

          </span>
      </h2>
      </div> */}


        {categories.map((element)=>{
          return(
            <Category item={element}/>
          )
        })}
        </div>


    )
}export default CategoriesContainer