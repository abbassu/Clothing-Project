import React, { useState } from "react";
import axios from "axios";
import "./showitem.scss";
const spanStyle = {
  display: "inline-block",
  width: "50px",
  backgroundColor: "lightblue",
  padding: "2px 8px 2px 0",
};
function One_quantity(props) {
  const [set_click, setSetclick] = useState(false);
  const [done_update, set_done_update] = useState(false);
  const [id, set_id] = useState(props.id);
  const [quantity, set_quantity] = useState(props.quantity);

  function update_quantity(id, value) {
    updateData();
  }

  function handleChange(event) {
    setSetclick(true);
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
      set_done_update(true);
      console.log("reaspojmnse", response);
    } catch (error) {
      console.log("errororo", error);
    }
  };

  return (
    <li key={props.idx}>
      <div style={spanStyle}> {props.name} </div>
      <input
        type="text"
        style={{ width: "100px" }}
        value={quantity}
        onChange={handleChange}
      />{" "}
      <button
        className={
          set_click
            ? done_update
              ? "  doneback  "
              : "  toclick "
            : "defaultcals"
        }
        // className="toclick"
        type="button"
        onClick={() => {
          update_quantity();
        }}
      >
        {done_update ? "تم التعديل " : "تعديل"}
      </button>
    </li>
  );
}

export default One_quantity;
