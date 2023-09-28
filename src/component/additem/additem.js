import React, { useEffect, useState } from "react";
import { collection, setDoc, doc, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase";
import axios from "axios";
import RadioButtonExample from "../threeChoice/ThreeChoice";

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
import AddMultiplePhoto from "../addMultiplePhoto/addMultiplePhoto";
function AddItem() {
  const query = collection(db, "categories");
  const [docs, loading, error] = useCollectionData(query);
  console.log("docs ------------ ", docs);
  const [detailsNum, setDetailsNum] = useState([3]);
  const defaultformFields = {
    id: "",
    department_id: "",
    name: "",
    cost: "",
    brand: "",
    quantity: "",
    view: "",
    detail: "",
    url: "",
    reate: "4",
    nameurl: "",
  };
  const [formFields, setformfields] = useState(defaultformFields);

  // function setdefault() {
  //   setformfields(defaultformFields);
  // }

  function handleChange(event) {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  }

  const [isProductDetails, setisProductDetails] = useState(false);

  const handleCheckboxChange = () => {
    setisProductDetails(!isProductDetails);
  };
  let f = 4;

  useEffect(() => {
    console.log("form", formFields);
    let name = formFields.name;

    // setisProductDetails({ ...isProductDetails, name });
  }, [formFields]);
  const [productData, setProductData] = useState({
    department_id: "",
    name: "",
    cost: "",
    quantity: "",
    percent: "",
    view: false,
    url_primary_image: "",
    // "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/366337295_6450978648270822_3158556925808717953_n.png?stp=dst-png_p960x960&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=eRqUQgJr1sEAX8kvtkO&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfCwj2XxnZA76bh3kZqF0UjxI7HDv2qc8Wz285Tmlynfgg&oe=64DD9424",
    isProductDetails: false,
    images: [
      // {
      //   url: "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/366682437_6450978694937484_9140068944129346078_n.png?stp=dst-png_p960x960&_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=IdraevgCwhwAX-8yprj&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfBxTcDtO1t9NQRbA4bvKP2lPfux_S9zje5Ridq4e_BXmQ&oe=64DC08A7",
      // },
      // {
      //   url: "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/366326819_6450978761604144_6648500924145443100_n.png?stp=dst-png_p960x960&_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=3nUfldOSvbkAX8UlAD4&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfAl7S1fBzdLKEypqXEXOxq4XEq4SfYBHDK7n5mwVt-Oag&oe=64DD0C4D",
      // },
      // {
      //   url: "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/366374367_6450978834937470_352421823217449159_n.png?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=WM1zajsy-JMAX90B1xA&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfCRFNwdqG9bTfVQSXn7TVtB2DN4czqC5A3Z3g7tW_RZlA&oe=64DC2390",
      // },
    ],
  });
  const {
    name,
    id,
    cost,
    department_id,
    quantity,
    url_primary_image,
    images,
    brand,
  } = productData;

  useEffect(() => {
    sendToDatabase();
  }, [productData]);

  const sendToDatabase = async (event) => {
    try {
      console.log("dddddddd", productData);
      const response = await axios.post("http://localhost:9999/product/", {
        product: productData,
      });
      console.log("Product added:", response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleMainImageInChild = (event) => {
    const { name, value } = event.target;
    console.log("event", event);
    if (name === "url_primary_image") {
      setProductData({ ...productData, url_primary_image: value });
      console.log("name", name);
    } else if (name === "images") {
      let lala = [];
      lala = images;
      lala.push(value);
      console.log("jjjjjjjj");

      setProductData({ ...productData, images: lala });
    }
  };

  const handleAllImagesInChild = () => {};

  async function fromUserToDataForm() {
    await setProductData({
      ...productData,
      name,
      cost,
      quantity,
      department_id,
      isProductDetails,
    });
  }
  const handleMainPhoto = () => {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    fromUserToDataForm();
  };

  return (
    <div className="trtr">
      <h1 className="lablee">Add Item</h1>
      <div className="additem">
        <form action="" className="fromee">
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
                      value: cost,
                      name: "cost",
                    }}
                  />
                </div>

                <div>
                  <FormInput
                    labelName="Department"
                    optionInput={{
                      type: "number",
                      onChange: handleChange,
                      required: true,
                      value: department_id,
                      name: "department_id",
                    }}
                  />

                  <FormInput
                    labelName="Quantity"
                    optionInput={{
                      type: "number",
                      onChange: handleChange,
                      required: true,
                      value: quantity,
                      name: "quantity",
                    }}
                  />
                  <FormInput
                    labelName="Quantity22222"
                    optionInput={{
                      type: "text",
                      onChange: handleMainImageInChild,
                      required: true,
                      value: url_primary_image,
                      name: "url_primary_image",
                    }}
                  />

                  <button
                    onClick={handleMainImageInChild}
                    name="images"
                    value={"ssssssssssssssssssssssssssssssssssssssssssssssssss"}
                  >
                    {" "}
                    add to main in
                  </button>

                  <FormInput
                    labelName="Brand Name"
                    optionInput={{
                      type: "text",
                      onChange: handleChange,
                      required: true,
                      value: brand,
                      name: "brand",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="imim">
              <TestFire type="button" />
            </div>
          </div>
          <div>
            <AddMultiplePhoto />
          </div>
          <div className="checkbox-label">
            <label>
              <input
                type="checkbox"
                checked={isProductDetails}
                className="checkbox-input"
                onChange={handleCheckboxChange}
              />
              Have More Details!
            </label>
          </div>
        </form>

        {isProductDetails ? <RadioButtonExample /> : ""}

        <Button buttonType="google" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
export default AddItem;
