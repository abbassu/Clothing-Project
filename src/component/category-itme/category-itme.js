import React from "react";

function Category({item}){
    return(
        <div className="category-container">
        <div className="background-image" style={{ 
            backgroundImage: `url(${item.image})` 
          }}>
          <div className="category-body-container">
          <img src="" alt="" />
          <h2> {item.title}</h2>
          <p>Shop Now</p>
          </div>
        </div>
      </div>
    )
}export default Category