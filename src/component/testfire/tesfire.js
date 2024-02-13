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

  const handleFileInputChange = async (event) => {
    await setSelectedFile(event.target.files[0]);
  };

  // useEffect(() => {
  //   console.log("in useeffect", selectedFile);
  //   // handleImageUpload();
  // }, [selectedFile]);

  // const handleImageUpload = async () => {
  //   console.log("in useeffect", selectedFile);
  //   if (!selectedFile) {
  //     alert("Please select an image file.");
  //     return;
  //   }
  //   const formData = new FormData();
  //   formData.append("image", selectedFile);
  //   try {
  //     const response = await axios.post(
  //       "https://api.imgbb.com/1/upload?key=beba7d00948fa46fd76a23e6b3582d84",
  //       formData
  //     );
  //     if (response.status === 200) {
  //       const uploadedImageUrl = response.data.data.url; // Extract the uploaded image URL
  //       props.handleAllImagesInChild(uploadedImageUrl);
  //       setSelectedFile(uploadedImageUrl);
  //       console.log("Image uploaded successfully:", uploadedImageUrl);
  //     }
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //   }
  // };

  // const onSelectFile = (event) => {
  //   const selectedFiles = event.target.files;
  //   const selectedFiles1 = event.target.files[0];
  //   setSelectedImages1((previousImages) =>
  //     previousImages.concat(selectedFiles1)
  //   );
  //   const selectedFilesArray = Array.from(selectedFiles);
  //   const imagesArray = selectedFilesArray.map((file) => {
  //     return URL.createObjectURL(file);
  //   });
  //   setSelectedImages(imagesArray);
  //   event.target.value = "";
  // };

  // function deleteHandler(image) {
  //   setSelectedImages(selectedImages.filter((e) => e !== image));
  //   URL.revokeObjectURL(image);
  // }

  return (
    <section>
      <div className="images_dd">
        {
          // selectedImages && (
          <div className="image_dd">
            <img src={selectedFile} alt="" />
            {/* <div
                className="foterimage"
                onClick={() => deleteHandler(selectedImages)}
              >
                <i class="fa-solid fa-xmark fa-lg"></i>
              </div> */}
          </div>
        }
      </div>

      <label className="labelin">
        الصورة الرئيسية
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
