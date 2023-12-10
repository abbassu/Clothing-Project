import React, { useEffect, useState } from "react";
import ColorWithSize from "./ColorWithSize";
import "./arraycolosize.scss";
function ArrayColorWithSize(props) {
  const initObject = {
    color: "",
    photo_url: "",
    size_Quantity: [{ size: "", quantity: 0 }],
    images: [],
  };
  const [quantity, setQuantity] = useState(1);
  const [array_CS, setArrayOfCS] = useState([]);
  const [sizesss, setSizesss] = useState([]);

  useEffect(() => {
    console.log("changeee");
    props.setArrayOfCS(array_CS);

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9999/product/sizes");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setSizesss(data.sizes); // Update state with fetched data
        console.log("ffffff", data.sizes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [array_CS]);
  const fffff = () => {
    console.log("changeee", array_CS);
    // props.setArrayOfCS(array_CS);
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity((prev) => prev + 1);
      const array_CS_temp = array_CS;
      const objectCS = initObject;
      array_CS_temp.push(objectCS);
      setArrayOfCS(array_CS_temp);
      props.editarray(array_CS_temp);
    }
  };

  const decreaseQuantity = () => {
    if (quantity != 1) {
      setQuantity((prev) => prev - 1);
      const array_CS_temp = array_CS;
      array_CS_temp.pop();
      setArrayOfCS(array_CS_temp);
      props.editarray(array_CS_temp);
    }
  };

  return (
    <div>
      <div className="allcolorwithsize">
        {array_CS?.map((ele, index) => {
          return (
            <ColorWithSize
              indexnum={index}
              initObject={array_CS[index]}
              changeStateDetails={props.changeStateDetails}
              array_CS={props.array_CS}
              editarray={props.editarray}
              sizesss={sizesss}
            />
          );
        })}
      </div>

      <div className="towbuttonincolorsize">
        <button onClick={increaseQuantity}>
          {" "}
          <i class="fa-solid fa-plus"></i>
        </button>
        <button onClick={decreaseQuantity}>
          {" "}
          <i class="fa-solid fa-minus"></i>
        </button>

        <button onClick={fffff}>
          {" "}
          <i class="fa-solid fa-minus">fffff</i>
        </button>
      </div>
    </div>
  );
}

export default ArrayColorWithSize;
