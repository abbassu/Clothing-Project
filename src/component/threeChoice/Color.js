import React, { useEffect, useState } from "react";
import FormInput from "../fom-input/form-input";
import AddMultiplePhoto from "../addMultiplePhoto/addMultiplePhoto";
import TestFire from "../testfire/tesfire";
function Color() {
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
  };

  const initObject = {
    color: "",
    photo_url: "",
    size_Quantity: [
      { size: "", quantity: 0 },
      { size: "", quantity: 0 },
      { size: "", quantity: 0 },
    ],
    images: [],
  };
  const [arrayOfColor, setArrayOfColor] = useState([initObject]);

  const [formFields, setformfields] = useState(defaultformFields);
  function setdefault() {
    setformfields(defaultformFields);
  }
  const { name, url, id, price, department, reate, nameurl } = formFields;

  function handleChange(event) {
    const { name, value } = event.target;
    setformfields({ ...formFields, [name]: value });
  }

  return (
    <div>
      <>
        <form action="">
          <div className="feildtoadd">
            <div className="flexo">
              <div className="flexooo">
                <FormInput
                  labelName="Color"
                  optionInput={{
                    type: "text",
                    onChange: handleChange,
                    required: true,
                    value: "blue",
                    name: "color",
                  }}
                />
                <FormInput
                  labelName="Quantity"
                  optionInput={{
                    type: "number",
                    onChange: handleChange,
                    required: true,
                    value: "50",
                    name: "quantity",
                  }}
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
        </form>
      </>
    </div>
  );
}

export default Color;
