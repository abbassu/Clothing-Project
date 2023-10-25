import React, { useEffect, useState } from "react";
import FormInput from "../fom-input/form-input";
import AddMultiplePhoto from "../addMultiplePhoto/addMultiplePhoto";
import TestFire from "../testfire/tesfire";
import ArraySize from "./ArraySize";
import "./colorwithsize.scss";
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
    "Wight",
    "Gray",
    "Orange",
    "Pink",
    "Brown",
  ]);

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

  const handleSizeChange = async (event) => {
    const newSize = event.target.value;

    let lal = props.array_CS;
    lal[props.indexnum].color = newSize;

    console.log("newcolor", newSize);
    console.log("props.index", props.index);

    console.log("lal[props.index].color", props.array_CS);

    // props.editarray(lal);

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
              <div>
                <label htmlFor="fontSize">
                  <>اختر اللون المناسب : &nbsp;</>
                </label>
                <select
                  id="fontSize"
                  value={"kkkkkkk"}
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
