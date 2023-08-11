import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.scss"; // Create this CSS file to style your component
import { CustomNextArrow, CustomPrevArrow } from "./CustomButton";
import { useState } from "react";
import { useEffect } from "react";
function ImageSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1024, // Adjust the breakpoint as needed
    //     settings: {
    //       slidesToShow: 3, // Change the number of slides shown on smaller screens
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 768, // Adjust the breakpoint as needed
    //     settings: {
    //       slidesToShow: 2, // Change the number of slides shown on even smaller screens
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 420, // Adjust the breakpoint as needed
    //     settings: {
    //       slidesToShow: 1, // Change the number of slides shown on even smaller screens
    //       slidesToScroll: 1,
    //     },
    //   },
    //   // Add more breakpoints and settings as needed
    // ],
  };
  const [arrayOfImage, setArrayOfImage] = useState(props.arrayOfImage);

  useEffect(() => {
    // setArrayOfImage(props.arrayOfImage);
  }, []);
  // console.log("arrararar", arrayOfImage);

  return (
    <div className="slider-container">
      <Slider {...settings} className="slider">
        {arrayOfImage?.map((element) => {
          return (
            <div className="slick-slide">
              <img src={element} alt="Image 1" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ImageSlider;
