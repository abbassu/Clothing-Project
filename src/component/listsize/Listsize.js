import React, { useState } from "react";

const FontSizeComboBox = (props) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

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
    <div>
      <label htmlFor="fontSize">Select Font Size:</label>
      <select id="fontSize" value={selectedSize} onChange={handleSizeChange}>
        <option value="">Select a size</option>
        {props.fontSizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
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
    </div>
  );
};

export default FontSizeComboBox;
