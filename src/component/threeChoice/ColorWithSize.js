import React, { useEffect, useState } from "react";
import FormInput from "../fom-input/form-input";
import AddMultiplePhoto from "../addMultiplePhoto/addMultiplePhoto";
import TestFire from "../testfire/tesfire";
import ArraySize from "./ArraySize";
import "./colorwithsize.scss";
import "./size.scss";

function ColorWithSize(props) {
  const [arrayOfSizeWithColor, setArrayOfSizeWithColor] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");

  const [quantity, setQuantity] = useState(1);
  const [groupOfColor, setgroupOfColor] = useState([
    "Green",
    "Blue",
    "Yellow",
    "Red",
    "Black",
    "White",
    "Gray",
    "Orange",
    "Pink",
    "Brown",
  ]);

  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9999/product/sizes");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setSizes(data.sizes); // Update state with fetched data
        console.log("Sizes:", data.sizes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function inside useEffect
  }, []);
  const defaultformFields = {
    id: "",
    department: "",
    name: "",
    price: "",
    brand: "",
    quantity: "",
    view: "",
    detail: "",
    url: "",
    reate: "4",
    nameurl: "",
    color: "",
  };

  const [formFields, setformfields] = useState(defaultformFields);
  function setdefault() {
    setformfields(defaultformFields);
  }

  const [valueOfColor, setValueOfColor] = useState("");
  const handleSizeChange = async (event) => {
    let newSize = event.target.value;
    setValueOfColor(newSize);
    console.log("new size", newSize);

    for (let o = 0; o < 33; o++) {
      console.log(newSize, sizes[o].name);
      if (newSize === sizes[o].name) {
        newSize = sizes[o].id;
        console.log("new size", newSize);
      }
    }

    let lal = props.array_CS;
    lal[props.indexnum].color = newSize;

    console.log("newcolor", newSize);
    console.log("props.index", props.index);

    console.log("lal[props.index].color", props.array_CS);

    // props.editarray(lal);
    console.log("selected size", selectedSize, "-", newSize);
    if (selectedSize === "") {
      setSelectedSize(newSize);
    } else {
      setSelectedSize(newSize);
    }
  };
  useEffect(() => {
    // console.log("data", initObject);
  }, [formFields]);

  const { name, url, id, price, department, reate, nameurl, color } =
    formFields;

  function handleChange(event) {
    const { name, value } = event.target;
    setformfields({ ...formFields, [name]: value });
  }

  // const initObject = {
  //   color: color,
  //   photo_url: "",
  //   size_Quantity: [{ size: "", quantity: 0 }],
  //   images: [],
  // };
  // const [colorstate, setcolorstate] = useState(initObject);

  return (
    <div>
      <>
        <div className="feildtoadd">
          <div className="flexo">
            <div className="sectioninin">
              <div className="jemmmi">
                <label htmlFor="fontSize" className="label1212">
                  <>اختر اللون المناسب : &nbsp;</>
                </label>
                <select
                  id="fontSize"
                  value={valueOfColor}
                  onChange={handleSizeChange}
                >
                  <option value={selectedSize}>{selectedSize}</option>
                  {groupOfColor?.map((size, index) => (
                    <option value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <ArraySize
                changeStateDetails={props.changeStateDetails}
                myObject={props.array_CS[props.indexnum]}
              />
            </div>
            <div className="imim">
              <TestFire type="button" />
            </div>
          </div>

          <div>
            <AddMultiplePhoto />
          </div>
        </div>
      </>
    </div>
  );
}

export default ColorWithSize;
