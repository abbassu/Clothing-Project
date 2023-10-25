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
  // console.log("docs ------------ ", docs);
  const [detailsNum, setDetailsNum] = useState([3]);

  // retuen new array with midified cartitems  new cart item
  const initObject = {
    color: 1,
    photo_url: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    size_Quantity: [{ size: "", quantity: 0 }],
    images: [],
  };

  const [initObjectState, setinitObjectState] = useState(initObject);
  const [array_CS, setArrayOfCS] = useState([]);

  const [typeradio, settyperadio] = useState(1);

  const editarray = (ee) => {
    setArrayOfCS(ee);
    console.log("edit parent now now now now111111111111");
    console.log(array_CS);
  };

  useEffect(() => {
    console.log("edit parent now now now now");
    console.log(array_CS);
  }, [array_CS]);

  const changeStateDetails = (value) => {
    setinitObjectState(value);
  };

  useEffect(() => {
    console.log("state object in parent ", initObjectState);
  }, [initObjectState]);

  const [stateForRequest, setStateForRequest] = useState(1);
  const changeStateRequest = (value) => {
    console.log("valeeeee", value);
    setStateForRequest(value);
  };

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
    // console.log("form", formFields);
    let name = formFields.name;

    // setisProductDetails({ ...isProductDetails, name });
  }, [formFields]);
  const [productData, setProductData] = useState({
    productIDAdmin: "",
    department_id: "",
    name: "",
    cost: "",
    quantity: "",
    percent: 0, // Default 0
    view: false,
    url_primary_image: "https//Hoodie9/9/2023",
    isProductDetails: true,
    BrandName: "",
    images: [
      {
        url: "https://Image_Hoodie_1.jpg",
      },
      {
        url: "https://Image_Hoodie_2.jpg",
      },
      {
        url: "https://Image_Hoodie_3.jpg",
      },
    ],
  });
  const {
    productIDAdmin,
    department_id,
    name,
    cost,
    quantity,
    percent, // Default 0
    view,
    url_primary_image,
    // isProductDetails,
    BrandName,
    images,
  } = productData;

  useEffect(() => {}, [productData]);

  const sendToDatabase = async (event) => {
    if (isProductDetails === true) {
      // console.log("hava details");
      try {
        // console.log("dddddddd", productData);
        const response = await axios.post("http://localhost:9999/product/", {
          product: productData,
        });
        console.log("Product added:", response.data);
        console.log(response.data.productId);
        await handleSubmitArraySize(response.data.productId);
      } catch (error) {
        console.error("Error adding product:", error);
      }
    } else {
      // console.log("no detailsd");
      try {
        // console.log("dddddddd", productData);
        const response = await axios.post("http://localhost:9999/product/", {
          product: productData,
        });
        console.log("Product added:", response.data);
        console.log(response.data.productId);
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }

    // try {
    //   // console.log("dddddddd", productData);
    //   const response = await axios.post("http://localhost:9999/product/", {
    //     product: productData,
    //   });
    //   console.log("Product added:", response.data);
    //   console.log(response.data.productId);
    //   await handleSubmitArraySize(response.data.productId);
    // } catch (error) {
    //   console.error("Error adding product:", error);
    // }
  };

  const handleSubmitArraySize = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:9999/product/details/${id}`,
        { productDetails: initObjectState }
      );
      console.log("Product details added:", response.data);
    } catch (error) {
      console.error("Error adding product details:", error);
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
      // console.log("jjjjjjjj");

      setProductData({ ...productData, images: lala });
    }
  };

  const handleAllImagesInChild = () => {};

  async function fromUserToDataForm() {
    await setProductData({
      ...productData,
      productIDAdmin,
      department_id,
      name,
      cost,
      quantity,
      percent: 0,
      view: false,
      url_primary_image: "ffffffffffffffffffffffff",
      isProductDetails,
      BrandName,
      images: [
        {
          url: "https://Image_Hoodie_1.jpg",
        },
        {
          url: "https://Image_Hoodie_2.jpg",
        },
        {
          url: "https://Image_Hoodie_3.jpg",
        },
      ],
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
            <div className="flexoo">
              <div>
                <FormInput
                  labelName="اسم المنتج"
                  optionInput={{
                    onChange: handleChange,
                    type: "text",
                    required: true,
                    value: name,
                    name: "name",
                  }}
                />
                <FormInput
                  labelName="الباركود"
                  optionInput={{
                    // type:"number",
                    onChange: handleChange,
                    required: true,
                    value: productIDAdmin,
                    name: "productIDAdmin",
                  }}
                />
                <FormInput
                  labelName="السعر"
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
                  labelName="القسم"
                  optionInput={{
                    type: "text",
                    onChange: handleChange,
                    required: true,
                    value: department_id,
                    name: "department_id",
                  }}
                />

                <FormInput
                  labelName="الكمية"
                  optionInput={{
                    type: "text",
                    onChange: handleChange,
                    required: true,
                    value: quantity,
                    name: "quantity",
                  }}
                />
                <FormInput
                  labelName="الماركة"
                  optionInput={{
                    type: "text",
                    onChange: handleChange,
                    required: true,
                    value: BrandName,
                    name: "BrandName",
                  }}
                />
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
              اضافة تفاصيل
            </label>
          </div>
        </form>

        {isProductDetails ? (
          <RadioButtonExample
            changeStateRequest={changeStateRequest}
            changeStateDetails={changeStateDetails}
            initObjectState={initObjectState}
            array_CS={array_CS}
            settyperadio={settyperadio}
            setArrayOfCS={setArrayOfCS}
            editarray={editarray}
          />
        ) : (
          ""
        )}

        <Button buttonType="google" onClick={sendToDatabase}>
          Submitlast
        </Button>
      </div>
    </div>
  );
}
export default AddItem;
