import React, { useEffect, useState } from "react";
import { collection, setDoc, doc, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { async } from "@firebase/util";
import TestFire from "../testfire/tesfire";
import Button from "../button/button";
import FormInput from "../fom-input/form-input";
import "./additem.scss";
import ImageSlider from "../imageslider/ImageSlider";
function AddItem() {
  const query = collection(db, "categories");
  const [docs, loading, error] = useCollectionData(query);
  console.log("docs ------------ ", docs);

  const defaultformFields = {
    id: "",
    department: "",
    name: "",
    price: "",
    brand: "",
    quantity: "",
    // numberOfSales:'',
    // isEmpty:'',
    // remain5Product:'',
    // percent:'',
    view: "",
    detail: "",
    url: "",
    reate: "4",
    nameurl: "",
  };
  const [formFields, setformfields] = useState(defaultformFields);

  useEffect(() => {
    console.log("form", formFields);
  }, [formFields]);

  function setdefault() {
    setformfields(defaultformFields);
  }

  const putUrl = (element, namename) => {
    console.log("added url ");
    setformfields({ ...formFields, url: element, nameurl: namename });
  };

  const { name, url, id, price, department, reate, nameurl } = formFields;

  function handleChange(event) {
    const { name, value } = event.target;
    setformfields({ ...formFields, [name]: value });
  }

  async function add(e) {
    console.log("department", department);
    e.preventDefault();
    console.log("e.preventDefault", e);
    let variable = -1;
    docs.forEach((doc, index) => {
      if (doc.title.toLowerCase() === department.toLowerCase()) {
        variable = index;
        console.log("varirir", variable);
      }
    });
    docs[variable].items.push({
      name: name,
      imageUrl: url,
      id,
      price,
      reate,
      nameurl,
    });
    console.log("variable", variable, "---------", "departemnt", department);
    const docRef = doc(db, "categories", department);
    await setDoc(docRef, { title: department, items: docs[variable].items });
    // setdefault()
  }

  const [isChecked, setIsChecked] = useState(false);

  // Event handler for checkbox changes
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="trtr">
      <h1 className="lablee">Add Item</h1>
      <div className="additem">
        <form action="" onSubmit={add} className="fromee">
          <div className="feildtoadd">
            <div>
              <div className="flexoo">
                <div>
                  <FormInput
                    labelName="Name"
                    optionInput={{
                      onChange: handleChange,
                      type: "text",
                      required: true,
                      value: name,
                      name: "name",
                    }}
                  />
                  <FormInput
                    labelName="ID"
                    optionInput={{
                      // type:"number",
                      onChange: handleChange,
                      required: true,
                      value: id,
                      name: "id",
                    }}
                  />
                  <FormInput
                    labelName="Price"
                    optionInput={{
                      type: "number",
                      onChange: handleChange,
                      required: true,
                      value: price,
                      name: "price",
                    }}
                  />
                </div>

                <div>
                  <FormInput
                    labelName="Department"
                    optionInput={{
                      type: "text",
                      onChange: handleChange,
                      required: true,
                      value: department,
                      name: "department",
                    }}
                  />

                  <FormInput
                    labelName="Quantity"
                    optionInput={{
                      type: "number",
                      onChange: handleChange,
                      required: true,
                      value: "",
                      name: "quantity",
                    }}
                  />

                  <FormInput
                    labelName="Brand Name"
                    optionInput={{
                      type: "text",
                      onChange: handleChange,
                      required: true,
                      value: "",
                      name: "brand",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="imim">
              <div className="fff">
                <img src={url} alt="" />
              </div>

              <TestFire fun={putUrl} type="button" />
            </div>
          </div>
          <Button buttonType="google" onClick={add}>
            ---- Submit init ----
          </Button>
        </form>

        <div className="checkbox-label">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              className="checkbox-input"
              onChange={handleCheckboxChange}
            />
            Have More Details!
          </label>
        </div>
        {isChecked ? (
          <form action="">
            <div className="feildtoadd">
              <div className="flexo">
                <div className="flexooo">
                  <FormInput
                    labelName="Size"
                    optionInput={{
                      type: "text",
                      onChange: handleChange,
                      required: true,
                      value: "xl",
                      name: "size",
                    }}
                  />
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
                  <div className="fff">
                    <img src={url} alt="" />
                  </div>

                  <TestFire fun={putUrl} type="button" />
                </div>
              </div>
            </div>
          </form>
        ) : (
          ""
        )}

        <Button buttonType="google" onClick={add}>
          Submit
        </Button>
      </div>
    </div>
  );
}
export default AddItem;
