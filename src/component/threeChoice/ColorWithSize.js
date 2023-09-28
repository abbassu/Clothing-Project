import React, { useEffect, useState } from "react";
import FormInput from "../fom-input/form-input";
import AddMultiplePhoto from "../addMultiplePhoto/addMultiplePhoto";
import TestFire from "../testfire/tesfire";
import ArraySize from "./ArraySize";
function ColorWithSize() {
  const [arrayOfSizeWithColor, setArrayOfSizeWithColor] = useState([]);

  const [quantity, setQuantity] = useState(1);

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

  useEffect(() => {
    console.log("data", initObject);
  }, [formFields]);

  const { name, url, id, price, department, reate, nameurl, color } =
    formFields;

  function handleChange(event) {
    const { name, value } = event.target;
    setformfields({ ...formFields, [name]: value });
  }

  const initObject = {
    color: color,
    photo_url: "",
    size_Quantity: [{ size: "", quantity: 0 }],
    images: [],
  };

  return (
    <div>
      <>
        <div className="feildtoadd">
          <div className="flexo">
            <div className="flexooo">
              <FormInput
                labelName="Color"
                optionInput={{
                  type: "text",
                  onChange: handleChange,
                  required: true,
                  value: color,
                  name: "color",
                }}
              />
            </div>
            <div className="imim">
              <TestFire type="button" />
            </div>
          </div>

          <div>
            <AddMultiplePhoto />
            <ArraySize />
          </div>
        </div>
      </>
    </div>
  );
}

export default ColorWithSize;
