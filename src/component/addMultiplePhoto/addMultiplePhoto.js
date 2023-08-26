import React, { useEffect, useState } from "react";
import "./addmultiple.scss";
import { LooksOutlined } from "@mui/icons-material";

const AddMultiplePhoto = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const [selectedImages1, setSelectedImages1] = useState([]);

  useEffect(() => {
    // console.log("selelelele", selectedImages);
  }, [selectedImages]);

  const onSelectFile = (event) => {
    // console.log("event ", event);
    const selectedFiles = event.target.files;

    const selectedFiles1 = event.target.files[0];

    setSelectedImages1((previousImages) =>
      previousImages.concat(selectedFiles1)
    );

    // console.log("selectedImages1 ", selectedImages1);

    const selectedFilesArray = Array.from(selectedFiles);

    // console.log("selectedFilesArray ", selectedFilesArray);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    // console.log("imagesArray ", imagesArray);

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // console.log("SelectedImages ", selectedImages);

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <section>
      <label className="labelin">
        + Add Images
        <br />
        <span>up to 6 images</span>
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
    </section>
  );
};

export default AddMultiplePhoto;
