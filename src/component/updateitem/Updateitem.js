import React, { useState, useEffect } from "react";
import axios from "axios";
import YourComponent from "./showitem";
import FormInput from "../fom-input/form-input";
import Button from "../button/button";
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
    <div className="update_page">
      <h1 className="lable">تعديل المخزون</h1>
      <div className="input_id_product">
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
      </div>

      <div className="button_search">
        <Button buttonType="google" onClick={move}>
          {" "}
          بحث{" "}
        </Button>
      </div>

      {id_product_main ? <YourComponent id_product={id_product_main} /> : <></>}
    </div>
  );
}

export default Updateitem;
