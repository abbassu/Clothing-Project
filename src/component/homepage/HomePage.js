import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.scss";
import Carousel from 'react-bootstrap/Carousel';

function HomePage() {
  

  return(
    <div className='homepage'>
      <div className="oneoneone">
        <div className="textoneone">
          <div className='oop'>
          Lorem ipsum dolor 
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maxime provident deserunt nostrum delectus blanditiis vel earum optio! Ratione deleniti neque commodi sunt earum inventore quia cupiditate animi vitae totam.
        </div>
        <div className="imageinoneone">
          <img src="https://images.pexels.com/photos/5264914/pexels-photo-5264914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>

      <div className="oneoneone kkl">
      <div className="imageinoneone">
          <img src="https://images.pexels.com/photos/5531542/pexels-photo-5531542.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className="textoneone">
          <div className='oop'>
          Lorem ipsum dolor
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maxime provident deserunt nostrum delectus blanditiis vel earum optio! Ratione deleniti neque commodi sunt earum inventore quia cupiditate animi vitae totam.
        </div>

      </div>



      
      
    </div>
  )
}



export default HomePage