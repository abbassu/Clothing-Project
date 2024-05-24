// // import React, { useState } from "react";
// // import FontSizeComboBox from "../../listsize/Listsize";
// // function Testing() {
// //   const fontSizes = [
// //     "xx-small",
// //     "x-small",
// //     "small",
// //     "medium",
// //     "large",
// //     "x-large",
// //     "xx-large",
// //     "3x-large",
// //     "4x-large",
// //     "5x-large",
// //     "6x-large",
// //   ];
// //   const [quantity, setquantity] = useState(2);
// //   const increaseQuantity = (event) => {
// //     if (quantity != fontSizes.length) setquantity((prev) => prev + 1);
// //   };
// //   const [detailsNum, setDetailsNum] = useState(0);
// //   const repeatedDivs = [];
// //   for (let i = 0; i < quantity; i++) {
// //     repeatedDivs.push(<FontSizeComboBox fontSizes={fontSizes} />);
// //   }
// //   return (
// //     <div>
// //       <label htmlFor="quantity">
// //         Quantity: {quantity} &nbsp; &nbsp;&nbsp;{" "}
// //       </label>
// //       <button onClick={increaseQuantity}> + </button>
// //       <div>{repeatedDivs}</div>
// //     </div>
// //   );
// // }
// // export default Testing;

// import React, { useState } from "react";
// import axios from "axios";

// function Testing() {
//   const [formData, setFormData] = useState({
//     color: "blue",
//     photo_url: "htp///YellowRed",
//     size_Quantity: [
//       { size: "S", quantity: 10 },
//       { size: "M", quantity: 11 },
//       { size: "L", quantity: 12 },
//     ],
//     images: [],
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:9999/product/details/39",
//         { productDetails: formData }
//       );
//       console.log("Product details added:", response.data);
//     } catch (error) {
//       console.error("Error adding product details:", error);
//     }
//   };
//   const [numberArray, setNumberArray] = useState([]);
//   const addNumber = () => {
//     const randomNumber = Math.floor(Math.random() * 100); // Generate a random number
//     setNumberArray([...numberArray, randomNumber]); // Add the number to the array
//   };
//   return (
//     <div>
//       <button onClick={handleSubmit}>ggg</button>
//       <button onClick={addNumber}>Add Number</button>
//       <ul>
//         {numberArray.map((number, index) => (
//           <li key={index}>{number}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Testing;

import React, { useState } from "react";
import axios from "axios";
import "./testrout.scss";
import Tool_compress from "../../testfire/tool_compress/tool_compress";

const UploadImage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleUpload = async () => {
    try {
      setUploading(true);
      const uploadPromises = selectedFiles.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        const response = await axios.post(
          "http://localhost:9999/user/upload-b2",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return response.data;
      });
      const uploadedResponses = await Promise.all(uploadPromises);
      const urls = uploadedResponses.map((response) => response.downloadUrl);

      setUploadedUrls(urls.flat()); // Flatten the array of arrays
    } catch (error) {
      console.error("Error uploading files", error);
      // Handle error, display message or update UI as needed
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <Tool_compress />
      <br />

      {/* <input type="file" onChange={handleFileChange} multiple />
      <button
        onClick={handleUpload}
        disabled={selectedFiles.length === 0 || uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {uploadedUrls.length > 0 && (
        <div>
          <h2>Uploaded Images:</h2>
          <ul>
            {uploadedUrls.map((url, index) => (
              <img src={url} alt="" className="oppop" />
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default UploadImage;

//
