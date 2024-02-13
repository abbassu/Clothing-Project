// import React, { useState } from "react";
// import axios from "axios";

// const ImgbbImageUpload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState("");
//   const albumId = "zageer-sport"; // Replace with your album ID

//   const handleFileInputChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleImageUpload = async () => {
//     if (!selectedFile) {
//       alert("Please select an image file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", selectedFile);
//     // formData.append("album", albumId);

//     try {
//       const response = await axios.post(
//         "https://api.imgbb.com/1/upload?key=beba7d00948fa46fd76a23e6b3582d84",
//         formData
//       );

//       if (response.status === 200) {
//         const uploadedImageUrl = response.data.data.url; // Extract the uploaded image URL
//         setImageUrl(uploadedImageUrl);
//         console.log("Image uploaded successfully:", uploadedImageUrl);
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };
//   return (
//     <div>
//       <h2>ImgBB Image Upload</h2>
//       <input type="file" onChange={handleFileInputChange} />
//       <button onClick={handleImageUpload}>Upload Image</button>
//       {imageUrl && (
//         <div>
//           <h3>Uploaded Image:</h3>
//           <img src={imageUrl} alt="Uploaded" />
//           <p>Image URL: {imageUrl}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImgbbImageUpload;

import React from "react";
import Tool_compress from "../testfire/tool_compress/tool_compress";
import ImageCompressor from "image-compressor.js";

const ImageUploader = () => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    const options = {
      quality: 0.6, // Set quality (0 to 1)
      maxWidth: 800, // Set max width
      maxHeight: 800, // Set max height
    };

    try {
      const compressedFile = await new ImageCompressor(
        file,
        options
      ).compress();

      console.log("Original File:", file.size);
      console.log("Compressed File:", compressedFile.size);

      // Handle the compressed file (e.g., upload or display)
    } catch (error) {
      console.error("Error compressing image:", error);
    }
  };

  return (
    <div>
      {/* <input type="file" onChange={handleFileChange} accept="image/*" /> */}
      <Tool_compress />
    </div>
  );
};

export default ImageUploader;
