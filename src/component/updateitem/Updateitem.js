import React, { useState, useEffect } from "react";
import axios from "axios";
import YourComponent from "./showitem";
import FormInput from "../fom-input/form-input";

function Updateitem() {
  const [id_product, set_id_product] = useState();

  const [id_product_main, set_id_product_main] = useState(0);

  const move = () => {
    console.log("fff" + id_product);
    set_id_product_main(id_product);
  };

  function handleChange(event) {
    const idProduct = event.target.value;
    set_id_product(idProduct);
  }
  return (
    <div>
      <FormInput
        labelName="رقم المنتج"
        optionInput={{
          type: "text",
          required: true,
          onChange: handleChange,
          name: "id",
          value: id_product,
        }}
      />
      <button onClick={move}> بحث </button>
      {id_product_main ? <YourComponent id_product={id_product_main} /> : <></>}
    </div>
  );
}

export default Updateitem;
