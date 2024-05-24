import React, { useState, useEffect } from "react";
import axios from "axios";

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image file.");
      return;
    }

    // Set your Backblaze B2 API key and bucket name
    const apiKey = "005cf369d7cefb60000000001";
    const bucketName = "my-image-bucket-clothing";

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        `https://api.backblazeb2.com/b2api/v2/b2_upload_file/${bucketName}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Image uploaded successfully!");
        setSelectedFile(null);
      } else {
        alert("Error uploading image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}

function ImageGallery() {
  const [imageUrls, setImageUrls] = useState([]);

  // Set your Backblaze B2 API key and bucket name
  const apiKey = "005cf369d7cefb60000000001";
  const bucketName = "my-image-bucket-clothing";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.post(
          "https://api.backblazeb2.com/b2api/v2/b2_list_file_names",
          { bucketName },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        if (response.status === 200) {
          const fileNames = response.data.files.map((file) => file.fileName);
          setImageUrls(fileNames);
        } else {
          console.error(
            "Error fetching image URLs:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };
    fetchImages();
  }, [apiKey, bucketName]);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-list">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            style={{ width: "200px", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}

function deletedepartment() {
  return (
    <div>
      <ImageUpload />
      <ImageGallery />
    </div>
  );
}

export default deletedepartment;
