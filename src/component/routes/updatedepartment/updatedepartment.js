import React, { useState } from "react";
import axios from "axios";

const UpdateDepartment = () => {
  const [formData, setFormData] = useState({
    name: "",
    ParentDepartmentID: "",
    Image: "",
    // Add other fields as needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePutRequest = async (event) => {
    const depID = 3; // Replace with the department ID you want to update

    try {
      const response = await axios.put(
        `http://localhost:9999/department?depID=${depID}`,
        formData
      );

      if (response.status === 200) {
        console.log("Department data updated successfully");
      } else {
        console.error("Failed to update department data");
      }
    } catch (error) {
      console.error("Error updating department data:", error);
    }
  };

  return (
    <div>
      <h2>Update Department</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Parent Department ID:
        <input
          type="text"
          name="ParentDepartmentID"
          value={formData.ParentDepartmentID}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          name="Image"
          value={formData.Image}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit" onClick={handlePutRequest}>
        Update Department
      </button>
    </div>
  );
};

export default UpdateDepartment;
