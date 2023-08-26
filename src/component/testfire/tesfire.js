// import { useEffect, useState } from "react";
// // import { storage } from "./firebaseConfig";
// import storage from "../../utils/firebase/firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { DeleteProduct } from "../../utils/firebase/firebase";
// import Button from "../button/button";
// import "./fire.scss";
// import Compressor from "compressorjs";
// import Resizer from "react-image-file-resizer";

// function TestFire({ fun }) {
//   const [file, setFile] = useState("");
//   const [editfile, seteditFile] = useState("");
//   const [ii, setii] = useState("");

//   const [percent, setPercent] = useState(0);
//   async function handleChange(event) {
//     console.log("photot", event.target.files[0].name);
//     setii(event.target.files[0].name);
//     await setFile(event.target.files[0]);
//   }

//   function addfromamazon(value) {
//     console.log("amazon");
//     fun(value, "ddd");
//   }

//   const comp = async () => {
//     // console.log("before",file)
//     await new Compressor(file, {
//       quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
//       success: (compressedResult) => {
//         seteditFile(compressedResult);
//       },
//     });
//   };

//   useEffect(() => {
//     comp();
//   }, [file]);

//   const handleUpload = async () => {
//     if (!editfile) {
//       alert("Please upload an image first!");
//     }
//     const storageRef = ref(storage, `/files/${file.name}`);
//     const uploadTask = uploadBytesResumable(storageRef, editfile);
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const percent = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         setPercent(percent);
//       },
//       (err) => console.log(err),
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((url) => {
//           console.log("urlll", url);
//           fun(url, ii);
//           // fun("https://www.amazon.com/photos/album/A19RR9XJ22TIX8:uKjIBoA-Q9KA69HZQPh-mA/gallery/uGRCs9GERtGvAQ8HTzSLDw","ddd")
//         });
//       }
//     );
//   };
//   return (
//     <div className="ioio">
//       <div className="choose">
//
//         <input
//           type="file"
//           onChange={handleChange}
//           accept="/image/*"
//           id="filephoto"
//         />
//         <label htmlFor="filephoto">
//           Choose M Photo <i className="fa-sharp fa-solid fa-image"></i>{" "}
//           <span className="pluss">+</span>{" "}
//         </label>
//       </div>
//       {/*             <Button onClick={handleUpload}>Upload to Storage</Button> */}
//       {/*             <p className="donepre">{percent} % done </p> */}
//       {/* <input type="text" onChange={addfromamazon}  /> */}
//
//     </div>
//   );
// }

// export default TestFire;

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

  const [selectedImages, setSelectedImages] = useState([]);

  const [selectedImages1, setSelectedImages1] = useState([]);

  useEffect(() => {}, [selectedImages]);

  const onSelectFile = (event) => {
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

    setSelectedImages(imagesArray);

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
        Add Main Image
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
