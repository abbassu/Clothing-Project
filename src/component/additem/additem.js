import React, { useEffect, useState } from "react";
import { collection, setDoc, doc, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase";
import axios from "axios";
import Compressor from "compressorjs";

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
import Tool_compress from "../testfire/tool_compress/tool_compress";
import ImageSlider from "../imageslider/ImageSlider";
import AddMultiplePhoto from "../addMultiplePhoto/addMultiplePhoto";
function AddItem() {
  const query = collection(db, "categories");
  const [docs, loading, error] = useCollectionData(query);
  const [detailsNum, setDetailsNum] = useState([3]);
  const [mainImage, setmainimage] = useState("");

  const [showForm, setShowFormt] = useState(false);

  const [array_images, setArrayImages] = useState();
  const [allImagesformchaild, setallimagesfromchid] = useState([]);

  const [name_primary_image, set_name_primary_image] = useState("");

  const [parentName, setParentName] = useState(0);
  const [allDepartment, setAllDepartment] = useState([]);

  function setimage(arr) {
    setArrayImages(arr);
  }

  const [arr_size, set_arr_size] = useState([]);
  useEffect(() => {
    console.log("sizes array ", arr_size);
  }, [arr_size]);
  const [id_product, set_id_product] = useState(0);
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
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    console.log("array_cs", array_CS);
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

  function handleChange(event) {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  }

  const [isProductDetails, setisProductDetails] = useState(false);

  const handleCheckboxChange = () => {
    setisProductDetails(!isProductDetails);
  };

  const [productData, setProductData] = useState({
    productIDAdmin: "",
    department_id: "",
    name: "",
    cost: "",
    quantity: "",
    percent: 0, // Default 0
    view: false,
    url_primary_image: "https://i.ibb",
    isProductDetails: false,
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

  useEffect(() => {
    console.log("product data", productData);
  }, [productData]);

  const sendToDatabase = async (event) => {
    if (isProductDetails === true) {
      try {
        console.log("dddddddd", productData);
        const response = await axios.post("http://localhost:9999/product/", {
          product: productData,
        });
        console.log("Product added:", response.data);
        console.log(response.data.productId);
        await handleSubmitArraySize(response.data.productId);
        console.log("ppppp");
      } catch (error) {
        console.error("Error adding product:", error);
      }
    } else {
      console.log("no detailsd", productData);
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
  };

  const handleSubmitArraySize = async (id) => {
    try {
      console.log("ppppp444");
      console.log("init object vvvvvvv", initObjectState);
      console.log("array_CS", array_CS);

      if (stateForRequest == 1) {
        console.log("arfffff", array_CS[0]);
        for (let i = 0; i < array_CS.length; i++) {
          console.log("ttttt");
          let jj = array_CS[i];
          const response = await axios.post(
            `http://localhost:9999/product/details/${id}`,
            { productDetails: jj }
          );
          console.log("Product details added:", response.data);
        }
      } else {
        const response = await axios.post(
          `http://localhost:9999/product/details/${id}`,
          { productDetails: initObjectState }
        );
      }
      console.log("Product details added:");
    } catch (error) {
      console.error("Error adding product details:", error);
    }
  };

  const handleUploadmain = async (v_array) => {
    try {
      console.log("filse", mainImage);
      const compressedFiles = await Promise.all(
        v_array.map(async (file) => {
          return new Promise((resolve, reject) => {
            new Compressor(file, {
              quality: 0.9,
              maxWidth: 500,
              // maxHeight: 200,
              mimeType: "image/jpeg",
              success(result) {
                console.log("success", result);
                const compressedFile = new File([result], file.name, {
                  type: result.type,
                });
                resolve(compressedFile);
              },
              error(error) {
                reject(error);
              },
            });
          });
        })
      );
      const formData = new FormData();
      compressedFiles.forEach((compressedFile) => {
        formData.append("file", compressedFile);
      });
      console.log("formdata in compress", formData);
      const d = new Date();
      const response = await axios.post(
        "http://localhost:9999/user/upload-b2",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const d2 = new Date();
      setmainimage(response.data.downloadUrl[0]);
      console.log(response);
      console.log(d2 - d);
    } catch (error) {
      console.error("Error uploading files", error);
    } finally {
      // setIsLoading(false);
    }
  };

  const handleAllImagesInChild = (url) => {
    console.log("rrrrrrrrrrrrrrrrrrrrrr");
    let v_array = [];
    v_array.push(url);
    handleUploadmain(v_array);
  };
  useEffect(() => {
    console.log("mainImage", mainImage);
    setProductData({ ...productData, url_primary_image: mainImage });
  }, [mainImage]);

  useEffect(() => {
    console.log("allImagesformchaild", allImagesformchaild);
  }, [allImagesformchaild]);

  const handleAllImagesInAllChild = (url) => {
    setallimagesfromchid(url);
  };

  useEffect(() => {
    console.log("now name image", name_primary_image);
  }, [name_primary_image]);

  const handleUpload = async () => {
    try {
      console.log("allImagesformchaild", allImagesformchaild);
      const compressedFiles = await Promise.all(
        allImagesformchaild.map(async (file) => {
          return new Promise((resolve, reject) => {
            new Compressor(file, {
              quality: 0.9,
              maxWidth: 500,
              // maxHeight: 200,
              mimeType: "image/jpeg",
              success(result) {
                console.log("success", result);
                const compressedFile = new File([result], file.name, {
                  type: result.type,
                });
                resolve(compressedFile);
              },
              error(error) {
                reject(error);
              },
            });
          });
        })
      );

      const formData = new FormData();
      compressedFiles.forEach((compressedFile) => {
        formData.append("file", compressedFile);
      });

      console.log("formdata in add item", formData);
      const d = new Date();
      const response = await axios.post(
        "http://localhost:9999/user/upload-b2",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const arr_object = response.data.downloadUrl.map((item) => {
        return { url: item };
      });

      setProductData({ ...productData, images: arr_object });
      const d2 = new Date();
      console.log("arr_object", arr_object);
      console.log(response);
      // setProductData
      console.log(d2 - d);
    } catch (error) {
      console.error("Error uploading files", error);
    } finally {
      console.log("dddd");
      // setIsLoading(false);
    }
  };

  async function take_size_color() {
    const response = await axios.get(`http://localhost:9999/product/sizes`);
    console.log("response with data", response.data.sizes);
    set_arr_size(response.data.sizes);
  }
  const handleChangeSelected = (id) => {
    setProductData({ ...productData, department_id: id.target.value });
    console.log("id", id.target.value);
    setParentName(id.target.value);
  };

  useEffect(() => {
    console.log("state object in parent ", initObjectState);
    take_size_color();
  }, []);

  async function getAllDepartment() {
    const response = await axios.get(`http://localhost:9999/department/`);
    setAllDepartment(response.data.departments);
    console.log("fff", response.data.departments);
  }

  useEffect(() => {
    getAllDepartment();
  }, []);

  return (
    <div className="trtr">
      <h1 className="lablee">Add Item</h1>
      <div className="additem">
        <div action="" className="fromee">
          <div className="feildtoadd">
            <div className="imim">
              <TestFire
                type="button"
                handleAllImagesInChild={handleAllImagesInChild}
              />
            </div>

            <div>
              <AddMultiplePhoto
                handleAllImagesInAllChild={handleAllImagesInAllChild}
              />
            </div>

            <Button
              onClick={() => {
                setShowFormt(true);
              }}
            >
              {" "}
              كتابة تفاصيل المنتج{" "}
            </Button>

            {showForm ? (
              <>
                {" "}
                <div className="flexoo">
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

                  <div className="DepartmentChoice">
                    <h5>اختر القسم التابع له :</h5>
                    <select value={parentName} onChange={handleChangeSelected}>
                      <option value="0">رئيسي </option>
                      {allDepartment.map((item) => {
                        return <option value={item.id}>{item.name} </option>;
                      })}
                    </select>
                  </div>

                  <FormInput
                    labelName="السعر"
                    optionInput={{
                      type: "text",
                      onChange: handleChange,
                      required: true,
                      value: cost,
                      name: "cost",
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
                </div>{" "}
              </>
            ) : (
              <></>
            )}
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
        </div>

        {isProductDetails ? (
          <RadioButtonExample
            handleAllImagesInAllChild={handleAllImagesInAllChild}
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

        {/* <Tool_compress /> */}

        <Button buttonType="google" onClick={sendToDatabase}>
          Submitlast
        </Button>
        {/* <button onClick={take_size_color}> vvv </button> */}
      </div>
      {/* <button onClick={handleUpload}> allflflflflflflff</button> */}
    </div>
  );
}
export default AddItem;
