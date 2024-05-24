import React, { useEffect } from "react";
import ImageSlider from "../../imageslider/ImageSlider";
import SliderProduct from "../../sliderProduct/sliderProduct";
import { useState } from "react";
import axios from "axios";
import TestFire from "../../testfire/tesfire";
import FormInput from "../../fom-input/form-input";
import "./addDepartment.scss";
import Button from "../../button/button";
function Adddepartment() {
  const [name, setName] = useState();
  const [parentName, setParentName] = useState(0);
  const [allDepartment, setAllDepartment] = useState([]);

  async function getAllDepartment() {
    const response = await axios.get(`http://localhost:9999/department/`);
    setAllDepartment(response.data.departments);
    console.log("fff", response.data.departments);
  }

  useEffect(() => {
    getAllDepartment();
  }, []);
  async function AddNewDepartment(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9999/admin/Department",
        {
          name: name,
          ParentDepartmentID: parentName, // can sent null or zero
          Image: "https:// woman",
        }
      );
      console.log("Department added:", response.data);
    } catch (error) {
      console.error("Error Adding Department:", error);
    }
  }

  const handleChange = (event) => {
    console.log("adding parent name to child", event.target.value);
    setName(event.target.value);
  };

  const handleChangeSelected = (id) => {
    console.log("id", id.target.value);
    setParentName(id.target.value);
  };

  return (
    <div className="addDepartmentContainer">
      {" "}
      <form action="" className="fromAddDepartment" onSubmit={AddNewDepartment}>
        <div className="imim">
          <TestFire type="button" />
        </div>
        <div className="flexoo">
          <FormInput
            labelName="اسم القسم"
            optionInput={{
              onChange: handleChange,
              type: "text",
              required: true,
              value: name,
              name: "name",
            }}
          />

          <div className="DepartmentChoice">
            <h5>اختر القسم التابع له :</h5>
            <select value={parentName} onChange={handleChangeSelected}>
              <option value="0">رئيسي </option>
              {allDepartment.map((item) => {
                return <option value={item.id}>{item.name} </option>;
              })}
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <Button
          buttonType="google"
          type="submit"
          onClick={() => {
            AddNewDepartment();
          }}
        >
          اضافة القسم
        </Button>
      </form>
    </div>
  );
}

export default Adddepartment;
