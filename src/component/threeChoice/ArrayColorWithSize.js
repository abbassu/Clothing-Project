import React, { useState } from "react";
import ColorWithSize from "./ColorWithSize";
function ArrayColorWithSize() {
  const initObject = {
    color: "",
    photo_url: "",
    size_Quantity: [{ size: "", quantity: 0 }],
    images: [],
  };
  const [quantity, setQuantity] = useState(1);
  const [array_CS, setArrayOfCS] = useState([1]);

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity((prev) => prev + 1);
      const array_CS_temp = array_CS;
      const objectCS = initObject;
      array_CS_temp.push(objectCS);
      setArrayOfCS(array_CS_temp);
    }
  };

  const decreaseQuantity = () => {
    if (quantity != 1) {
      setQuantity((prev) => prev - 1);
      const array_CS_temp = array_CS;
      array_CS_temp.pop();
      setArrayOfCS(array_CS_temp);
    }
  };

  return (
    <div>
      <button onClick={increaseQuantity}> + </button>
      <button onClick={decreaseQuantity}> - </button>
      {array_CS?.map((ele, index) => {
        return <ColorWithSize />;
      })}
    </div>
  );
}

export default ArrayColorWithSize;
