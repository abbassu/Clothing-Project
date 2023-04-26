import React from "react";
import { useNavigate } from "react-router-dom";

function Category({item}){
  const navigate=useNavigate()
  
  const changePaht=(value)=>{
    navigate(`subcategory/${value}`)
  }
  
  return(
        <div className="category-container" onClick={()=>{
          changePaht(item.title)
        }}>
        <div className="background-image" style={{ 
            backgroundImage: `url(${item.image})` 
          }}>
          <div className="category-body-container">
          <img src="" alt="" />
          <h3> {item.title}</h3>
          {/* <p>Shop Now</p> */}
          </div>
        </div>
      </div>
    )
}export default Category