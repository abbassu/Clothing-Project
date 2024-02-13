import React from "react";

import { useEffect, useState } from "react";
import Compressor from "compressorjs";

function Tool_compress(props) {
  const [compressedImageUrl, setCompressedImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const imageUrl =
    "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg";
  const [filee, setfile] = useState();
  useEffect(() => {
    const compressImage = async () => {
      try {
        const compressedBlob = await new Promise((resolve, reject) => {
          new Compressor(filee, {
            quality: 0.8, // Adjust the desired image quality (0.0 - 1.0)
            maxWidth: 400, // Adjust the maximum width of the compressed image
            // maxHeight: 300, // Adjust the maximum height of the compressed image
            mimeType: "image/jpeg", // Specify the output image format
            success(result) {
              resolve(result);
            },
            error(error) {
              reject(error);
            },
          });
        });
        console.log("file", filee);

        console.log("compressedBlob", compressedBlob);

        setCompressedImageUrl(URL.createObjectURL(compressedBlob));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    compressImage();
  }, [filee]);

  return (
    <div className="App">
      <div>
        <input
          type="file"
          onChange={(e) => {
            setfile(e.target.files[0]);
          }}
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <img src={compressedImageUrl} alt="Compressed Image" />
        )}
      </div>
    </div>
  );
}
export default Tool_compress;
