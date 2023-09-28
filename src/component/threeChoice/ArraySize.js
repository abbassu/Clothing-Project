import React, { useEffect, useState } from "react";
import Size from "./Size";
import axios from "axios";
function ArraySize() {
  const [fontSize, setFontSize] = useState([1]);

  const initObject = {
    color: "No Color",
    photo_url: "",
    size_Quantity: [{ size: "", quantity: 0 }],
    images: [],
  };
  const [objectData, setObjectData] = useState(initObject);

  // const [formData, setFormData] = useState({
  //   color: "blue",
  //   photo_url: "htp///YellowRed",
  //   size_Quantity: [
  //     { size: "S", quantity: 10 },
  //     { size: "M", quantity: 11 },
  //     { size: "L", quantity: 12 },
  //   ],
  //   images: [],
  // });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9999/product/details/125",
        { productDetails: objectData }
      );
      console.log("Product details added:", response.data);
    } catch (error) {
      console.error("Error adding product details:", error);
    }
  };

  const [groupOfSize, setGroupOfSize] = useState([
    "XXS",
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "4XL",
    "5XL",
  ]);

  useEffect(() => {
    console.log("000000", groupOfSize);
  }, [groupOfSize]);

  const returnSelectedSize = (newSize) => {
    console.log("---- ------", newSize);
    let y = groupOfSize;
    y.push(newSize);
    console.log("yyyy", y);
    setGroupOfSize(y);
  };

  const deleteSelectedSize = (newSize) => {
    console.log("newsize", newSize);
    setGroupOfSize((prevSizes) => prevSizes.filter((size) => size !== newSize));
  };

  useEffect(() => {
    console.log("objectdata", objectData);
  }, [objectData]);

  const [quantity, setQuantity] = useState(1);
  const [size_Quantity, setsize_Quantity] = useState([
    { size: "", quantity: 0 },
  ]);

  const deleteSize = (newSize) => {
    console.log("fffffffff");
    setGroupOfSize((prevSizes) => prevSizes.filter((size) => size !== newSize));
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity((prev) => prev + 1);
      const objSize = { size: "", quantity: 0 };
      const size_Quantity = objectData.size_Quantity;
      size_Quantity.push(objSize);
      setsize_Quantity(size_Quantity);
      setObjectData({ ...objectData, size_Quantity });
    }
  };

  const decreaseQuantity = () => {
    if (quantity != 1) {
      setQuantity((prev) => prev - 1);
      const size_Quantity = objectData.size_Quantity;
      size_Quantity.pop();
      setObjectData({ ...objectData, size_Quantity });
    }
  };

  useEffect(() => {
    generateNumberArray(quantity);
  }, [quantity]);

  const [numberArray, setNumberArray] = useState([]);

  const generateNumberArray = (count) => {
    const newArray = Array.from({ length: count }, (_, index) => index + 1);
    setNumberArray(newArray);
  };

  const updateObject = (value, index) => {
    const size_Quantity = objectData.size_Quantity;

    size_Quantity[index].size = value.size;
    size_Quantity[index].quantity = value.quantity;

    setObjectData({ ...objectData, size_Quantity });
  };

  return (
    <div>
      <button onClick={increaseQuantity}> + </button>
      <button onClick={decreaseQuantity}> - </button>

      {size_Quantity?.map((ele, index) => {
        return (
          <Size
            fontSizes={fontSize}
            index={index}
            update={updateObject}
            groupOfSize={groupOfSize}
            deleteSelectedSize={deleteSize}
            returnSelectedSize={returnSelectedSize}
          />
        );
      })}

      <button onClick={handleSubmit}> submit now </button>
    </div>
  );
}

export default ArraySize;
