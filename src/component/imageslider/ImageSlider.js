import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.scss"; // Create this CSS file to style your component
import { CustomNextArrow, CustomPrevArrow } from "./CustomButton";
function ImageSlider() {
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

  return (
    <div className="slider-container">
      <Slider {...settings} className="slider">
        <div className="slick-slide">
          <img
            src="https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/365256085_6424126297622724_4360210348240752766_n.png?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=WWUvj8ufuxIAX9w1ubP&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfBtOvKjKDqYYqohyYsjavW8-Afw_VFqT2m47IIIYAnWlA&oe=64D7EFA0"
            alt="Image 1"
          />
        </div>
        <div className="slick-slide">
          <img
            src="https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/365036010_6424126417622712_899384674464093156_n.png?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=bGi6bRwmJMMAX-kNrHk&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfA980-sNry1Uue0K3HEk_0I5qL2KhDVNFW2qH6oybhhEA&oe=64D7D23F"
            alt="Image 2"
          />
        </div>

        <div className="slick-slide">
          <img
            src="https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/364075902_6427486693953351_5613735654206660303_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=6GHLCxxIUisAX_IgMMe&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfBBfKUEkFPkbwpiKxeTJn_TcNsYBDZ9x1ojjhOifqJfsw&oe=64D8E8FD"
            alt="Image 2"
          />
        </div>

        <div className="slick-slide">
          <img
            src="https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/365094027_6424126294289391_2211168095409642893_n.png?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=gkCxkOSAdJUAX_GugUf&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfCYw15zLjO7EiJLCQc0ITwgsNvzFxLR5C9NEmbJHqTApw&oe=64D81B89"
            alt="Image 3"
          />
        </div>

        <div className="slick-slide">
          <img
            src="https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/365152480_6424126254289395_5724773236817374115_n.png?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=jLvbD2S3a0UAX8Lkv-5&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfBz2IL4quSnnWJ5LXKY5Tf2lAezKlClvXNX-RRvni150g&oe=64D7F7EE"
            alt="Image 3"
          />
        </div>

        {/* <div className="slick-slide">
          <img
            src="https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/365123798_6424126240956063_6068001723627748473_n.png?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=Zb8OLIwA-8AAX_cvbW6&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfAyjlQ7S8xAMaNbT34NOxzY5VwLFpUJKWAVc4REqB0-sg&oe=64D92483"
            alt="Image 3"
          />
        </div>

        <div className="slick-slide">
          <img
            src="https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/365200652_6424126307622723_8678866514428006_n.png?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=4MHKfuJyNOkAX-VBDpT&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfAMO9QKfflomgVkOjBPHkYlx4e2A_0OUIhggoWC6BXUsQ&oe=64D84273"
            alt="Image 3"
          />
        </div>

        <div className="slick-slide">
          <img
            src="https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/365222620_6424126360956051_5162001909273500220_n.png?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=0Rj8WqqPMlgAX-8ItBb&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfAy-G8cCQ1w-ceRdU-5vpNSett0hQWToVAsmZ34UQqPLw&oe=64D891B7"
            alt="Image 3"
          />
        </div> */}

        {/* Add more images as needed */}
      </Slider>
    </div>
  );
}

export default ImageSlider;
