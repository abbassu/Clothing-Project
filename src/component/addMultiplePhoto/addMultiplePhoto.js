// import React, { useEffect, useState } from "react";
// import "./addmultiple.scss";
// import { LooksOutlined } from "@mui/icons-material";
// import axios from "axios";
// const AddMultiplePhoto = (props) => {
//   const [selectedImages, setSelectedImages] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [arrayImages, setArrayImages] = useState([]);
//   const handleFileInputChange = async (event) => {
//     await setSelectedFile(event.target.files[0]);
//   };
//   useEffect(() => {
//     console.log("in useeffect handle");
//     handleImageUpload();
//   }, [selectedFile]);
//   useEffect(() => {
//     console.log("in useeffect ffff");
//     addingAllPhotos();
//   }, [selectedImages]);
//   useEffect(() => {
//     console.log("done", arrayImages);
//   }, [arrayImages]);
//   async function addingAllPhotos() {
//     let arrayI = arrayImages;
//     arrayI.push(selectedImages);
//     var filtered = arrayI.filter(function (el) {
//       return el != null;
//     });
//     console.log("vvvvvv", filtered);
//     await setArrayImages(filtered);
//     finish();
//   }
//   const finish = () => {
//     console.log("ddd");
//     console.log("done", arrayImages);
//   };
//   const handleImageUpload = async () => {
//     console.log("in useeffect", selectedFile);
//     if (!selectedFile) {
//       alert("Please select an image file");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("image", selectedFile);
//     try {
//       const response = await axios.post(
//         "https://api.imgbb.com/1/upload?key=beba7d00948fa46fd76a23e6b3582d84",
//         formData
//       );
//       if (response.status === 200) {
//         const uploadedImageUrl = response.data.data.url;
//         setSelectedImages(uploadedImageUrl);
//         console.log("Image uploaded successfully:", uploadedImageUrl);
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };
//   function deleteHandler(image) {
//     setSelectedImages(selectedImages.filter((e) => e !== image));
//     URL.revokeObjectURL(image);
//   }
//   return (
//     <section>
//       <label className="labelin">
//         اضافة المزيد من الصور+
//         <input
//           className="opopop"
//           type="file"
//           name="images"
//           onChange={handleFileInputChange}
//           multiple
//           accept="image/png , image/jpeg, image/webp"
//         />
//       </label>
//       <div className="images_dd">
//         {arrayImages.map((img_url) => {
//           if (img_url) {
//             return (
//               <div className="image_dd">
//                 <img src={img_url} alt="" />
//               </div>
//             );
//           } else {
//             return null;
//           }
//         })}
//       </div>
//     </section>
//   );
// };
// export default AddMultiplePhoto;

import React, { useEffect, useState } from "react";
import "./addmultiple.scss";
import { LooksOutlined } from "@mui/icons-material";
import axios from "axios";

const AddMultiplePhoto = (props) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [arrayImages, setArrayImages] = useState([]);

  const [showArray, setShowArray] = useState([]);

  const handleFileInputChange = async (event) => {
    const v_array = selectedFiles.concat(Array.from(event.target.files));
    const showArray = v_array.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setShowArray(showArray);
    console.log("showArray", showArray);
    setSelectedFiles(v_array);
  };

  useEffect(() => {
    const showArray = selectedFiles.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setShowArray(showArray);
    console.log("multiple photo to parent", selectedFiles);
    props.handleAllImagesInAllChild(selectedFiles);
  }, [selectedFiles]);

  function deleteHandler(image) {
    setSelectedFiles(selectedFiles.filter((item) => item.name !== image));
  }

  return (
    <section>
      <label className="labelin">
        اضافة المزيد من الصور
        <input
          className="opopop"
          type="file"
          name="images"
          onChange={handleFileInputChange}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>

      <div className="images_dd">
        {showArray.map((item, index) => (
          <div key={index} className="image_dd">
            <img src={item.url} alt="" />
            <button onClick={() => deleteHandler(item.name)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddMultiplePhoto;
