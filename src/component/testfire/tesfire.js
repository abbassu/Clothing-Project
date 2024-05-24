import React, { useEffect, useState } from "react";
import { LooksOutlined } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "../imageslider/CustomButton";
import axios from "axios";
const TestFire = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const [selectedImages, setSelectedImages] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileInputChange = async (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setImageUrl(url);
    console.log("event.target.files[0]", event.target.files[0]);
    props.handleAllImagesInChild(event.target.files[0]); // await setSelectedFile(event.target.files[0]);
  };

  return (
    <section>
      <div className="images_dd">
        {
          // selectedImages && (
          <div className="image_dd">
            <img src={imageUrl} alt="" />
          </div>
        }
      </div>

      <label className="labelin">
        اضافة الصورة الرئيسية
        <input
          className="opopop"
          type="file"
          name="images"
          onChange={handleFileInputChange}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />
    </section>
  );
};

export default TestFire;
