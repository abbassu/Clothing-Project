import React, { useEffect, useState } from "react";

const Size = (props) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [up, setUp] = useState(props.fontSizes);

  const [groupOfSize, setGroupOfSize] = useState(props.groupOfSize);
  const deleteSelectedSize = (newSize) => {
    setGroupOfSize((prevSizes) => prevSizes.filter((size) => size !== newSize));
    console.log("ddddd", selectedSize);
  };

  const handleSizeChange = async (event) => {
    const newSize = event.target.value;

    if (selectedSize == "") {
      setSelectedSize(newSize);
    } else {
      await props.returnSelectedSize(selectedSize);
      setSelectedSize(newSize);
    }
  };

  useEffect(() => {
    props.update({ size: selectedSize, quantity: 1 }, props.index);
    props.deleteSelectedSize(selectedSize);
    console.log("1111111111111111111111111", selectedSize);
  }, [selectedSize]);

  useEffect(() => {
    props.update({ size: selectedSize, quantity: quantity }, props.index);
  }, [quantity]);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity != 0) setQuantity(quantity - 1);
    else {
    }
  };

  return (
    <>
      {up?.map(() => {
        return (
          <div>
            <label htmlFor="fontSize">Select Font Size:</label>
            <select id="fontSize" value={"kkkkkkk"} onChange={handleSizeChange}>
              <option value={selectedSize}>{selectedSize}</option>
              {props.groupOfSize?.map((size, index) => (
                <option value={size}>{size}</option>
              ))}
            </select>
            <label htmlFor="quantity"> &nbsp; Quantity: &nbsp;</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
            &nbsp;
            <button onClick={increaseQuantity}>+</button> &nbsp;
            <button onClick={decreaseQuantity}> - </button>
            <ul>
              {props.groupOfSize.map((item, index) => (
                <span key={index}>{item} </span>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Size;
