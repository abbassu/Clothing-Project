import React, { useState } from "react";
import axios from "axios";
const spanStyle = {
  display: "inline-block",
  width: "50px",
  backgroundColor: "lightblue",
};
function One_quantity(props) {
  const [id, set_id] = useState(props.id);
  const [quantity, set_quantity] = useState(props.quantity);

  function update_quantity(id, value) {
    updateData();
  }

  function handleChange(event) {
    const quantity = event.target.value;
    console.log("quantity", quantity);
    console.log("id", id);
    set_quantity(quantity);
  }

  const updateData = async () => {
    console.log("gggg");
    try {
      console.log("iiii");
      const response = await axios.put(
        "http://localhost:9999/product/quantity",
        {
          detail_size_id: id,
          quantity: quantity,
        }
      );
      console.log("reaspojmnse", response);
    } catch (error) {
      console.log("errororo", error);
    }
  };

  return (
    <li key={props.idx}>
      <div style={spanStyle}> {props.name}: </div>
      <input
        type="text"
        style={{ width: "100px" }}
        value={quantity}
        onChange={handleChange}
      />{" "}
      <button
        type="button"
        onClick={() => {
          update_quantity();
        }}
      >
        {" "}
        update{" "}
      </button>
    </li>
  );
}

export default One_quantity;
