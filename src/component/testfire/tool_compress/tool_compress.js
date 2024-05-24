// import React, { useEffect, useState } from "react";
// import Compressor from "compressorjs";
// import axios from "axios";
// function Tool_compress(props) {
//   const [compressedImageUrls, setCompressedImageUrls] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [files, setFiles] = useState([]);

//   // const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploadedUrls, setUploadedUrls] = useState([]);

//   const handleUpload = async () => {
//     try {
//       setIsLoading(true);
//       // const uploadPromises = files.map(async (file) => {
//       //   const formData = new FormData();
//       //   formData.append("file", file);
//       //   const response = await axios.post(
//       //     "http://localhost:9999/user/upload-b2",
//       //     formData,
//       //     {
//       //       headers: {
//       //         "Content-Type": "multipart/form-data",
//       //       },
//       //     }
//       //   );
//       //   return response.data;
//       // });
//       const formData = new FormData();
//       const fff = files.map((file) => {
//         formData.append("file", file);
//       });
//       console.log("formData", formData);
//       const d = new Date();
//       const response = await axios.post(
//         "http://localhost:9999/user/upload-b2",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       const d2 = new Date();

//       console.log(response);
//       console.log(d2 - d);
//       // const uploadedResponses = await Promise.all(uploadPromises);
//       // const urls = uploadedResponses.map((response) => response.downloadUrl);

//       // console.log("------------", urls);
//       // setUploadedUrls(urls.flat()); // Flatten the array of arrays
//     } catch (error) {
//       console.error("Error uploading files", error);
//       // Handle error, display message or update UI as needed
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     const compressImages = async () => {
//       try {
//         const compressedBlobs = await Promise.all(
//           files.map((file) => {
//             return new Promise((resolve, reject) => {
//               new Compressor(file, {
//                 quality: 0.7,
//                 maxWidth: 400,
//                 mimeType: "image/jpeg",
//                 success(result) {
//                   console.log("Successfully compressed:", result);
//                   resolve(result);
//                 },
//                 error(error) {
//                   console.error("Compression error:", error);
//                   reject(error);
//                 },
//               });
//             });
//           })
//         );
//         const compressedUrls = compressedBlobs.map((blob) =>
//           URL.createObjectURL(blob)
//         );
//         console.log("Compressed URLs:", compressedUrls);
//         setCompressedImageUrls(compressedUrls);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error compressing images:", error);
//         setIsLoading(false);
//       }
//     };

//     compressImages();
//   }, [files]);

//   const handleFileChange = (event) => {
//     const selectedFiles = Array.from(event.target.files);
//     console.log("Selected files:", selectedFiles);
//     setFiles(selectedFiles);
//   };

//   return (
//     <div className="App">
//       <div>
//         <input
//           type="file"
//           onChange={handleFileChange}
//           multiple
//           accept="image/*"
//         />
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : (
//           uploadedUrls.map((url, index) => (
//             <img key={index} src={url} alt={`Compressed Image ${index}`} />
//           ))
//         )}
//       </div>
//       <button onClick={handleUpload}> upload </button>
//     </div>
//   );
// }
// export default Tool_compress;

///////////////

import React, { useEffect, useState } from "react";
import Compressor from "compressorjs";
import axios from "axios";

function Tool_compress(props) {
  const [compressedImageUrls, setCompressedImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [files, setFiles] = useState([]);
  const [uploadedUrls, setUploadedUrls] = useState([]);

  // const handleUpload = async () => {
  //   try {
  //     setIsLoading(true);
  //     const compressedFiles = await Promise.all(
  //       files.map(async (file) => {
  //         return new Promise((resolve, reject) => {
  //           new Compressor(file, {
  //             quality: 0.7,
  //             maxWidth: 400,
  //             mimeType: "image/jpeg",
  //             success(result) {
  //               console.log("success", result);
  //               resolve(result);
  //             },
  //             error(error) {
  //               reject(error);
  //             },
  //           });
  //         });
  //       })
  //     );
  //     const formData = new FormData();
  //     compressedFiles.forEach((compressedFile) => {
  //       formData.append("file", compressedFile);
  //     });
  //     const d = new Date();
  //     const response = await axios.post(
  //       "http://localhost:9999/user/upload-b2",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     const d2 = new Date();
  //     console.log(response);
  //     console.log(d2 - d);
  //   } catch (error) {
  //     console.error("Error uploading files", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleUpload = async () => {
    try {
      console.log("filse", files);
      setIsLoading(true);
      const compressedFiles = await Promise.all(
        files.map(async (file) => {
          return new Promise((resolve, reject) => {
            new Compressor(file, {
              quality: 0.9,
              maxWidth: 500,
              // maxHeight: 200,
              mimeType: "image/jpeg",
              success(result) {
                console.log("success", result);
                const compressedFile = new File([result], file.name, {
                  type: result.type,
                });
                resolve(compressedFile);
              },
              error(error) {
                reject(error);
              },
            });
          });
        })
      );

      const formData = new FormData();
      compressedFiles.forEach((compressedFile) => {
        formData.append("file", compressedFile);
      });
      console.log("formdata in compress", formData);

      const d = new Date();
      const response = await axios.post(
        "http://localhost:9999/user/upload-b2",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const d2 = new Date();

      console.log(response);
      console.log(d2 - d);
    } catch (error) {
      console.error("Error uploading files", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const compressImages = async () => {
      try {
        const compressedBlobs = await Promise.all(
          files.map((file) => {
            return new Promise((resolve, reject) => {
              new Compressor(file, {
                quality: 0.9,
                maxWidth: 500,
                // maxHeight: 700,
                mimeType: "image/jpeg",
                success(result) {
                  console.log("Successfully compressed:", result);
                  resolve(result);
                },
                error(error) {
                  console.error("Compression error:", error);
                  reject(error);
                },
              });
            });
          })
        );
        const compressedUrls = compressedBlobs.map((blob) =>
          URL.createObjectURL(blob)
        );
        console.log("Compressed URLs:", compressedUrls);
        setCompressedImageUrls(compressedUrls);
        setIsLoading(false);
      } catch (error) {
        console.error("Error compressing images:", error);
        setIsLoading(false);
      }
    };

    compressImages();
  }, [files]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    console.log("Selected files:", selectedFiles);
    setFiles(selectedFiles);
  };

  return (
    <div className="App">
      <div>
        <input
          type="file"
          onChange={handleFileChange}
          multiple
          accept="image/*"
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          compressedImageUrls.map((url, index) => (
            <img key={index} src={url} alt={`Compressed Image ${index}`} />
          ))
        )}
      </div>
      <button onClick={handleUpload}> upload </button>
    </div>
  );
}

export default Tool_compress;
