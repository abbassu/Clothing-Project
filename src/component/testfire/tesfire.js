import React, { useEffect, useState } from "react";
import { LooksOutlined } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "../imageslider/CustomButton";

const TestFire = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const [selectedImages, setSelectedImages] = useState([]);

  const [selectedImages1, setSelectedImages1] = useState([]);

  useEffect(() => {}, [selectedImages]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;

    const selectedFiles1 = event.target.files[0];

    setSelectedImages1((previousImages) =>
      previousImages.concat(selectedFiles1)
    );

    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages(imagesArray);

    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <section>
      <div className="images_dd">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image_dd">
                <img src={image} alt="upload" />
                <div
                  className="foterimage"
                  onClick={() => deleteHandler(image)}
                >
                  <i class="fa-solid fa-xmark fa-lg"></i>
                </div>
              </div>
            );
          })}
      </div>

      <label className="labelin">
        الصورة الرئيسية
        <input
          className="opopop"
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />
    </section>
  );
};

export default TestFire;
