import React, { useState } from "react";
import FormInput from "../fom-input/form-input";
import axios from "axios";
function MakeSales() {
  const [product_id, setProductId] = useState("");
  const [product, setProduct] = useState("");
  const [percent, setPercent] = useState("");

  const handlePatchRequest = async () => {
    console.log("sos");

    try {
      console.log("sas");
      const response = await axios.put(`http://localhost:9999/admin/sales`, {
        productID: 117,
        percent: "11", // or sent new value. As below
        type: "p", // ( p :-> percent ), <--> , ( n :-> number )
      });

      console.log("respones", response);
    } catch (error) {
      // Handle fetch errors
      console.error("faild to add sales :-------", error);
    }
  };

  const handleChangePercent = (event) => {
    const valuePercent = event.target.value;
    setPercent(valuePercent);
  };

  return (
    <div className="fffa">
      <h1 className="lable"> عمل تخفيضات </h1>
      <div className="searchFilter ddd">
        <div className="boxing uu"></div>
      </div>
      {/* <div>
        <FormInput
          labelName="رقم المنتج"
          optionInput={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "id",
            value: product_id,
          }}
        />{" "}
        {/* <button onClick={fetchProductDetails}>بحث</button>{" "} */}
      <input
        type="text"
        placeholder="percent of sale"
        value={percent}
        onChange={handleChangePercent}
      />
      <br />
      <br />
      <button
        onClick={() => {
          handlePatchRequest();
        }}
      >
        {" "}
        عمل خصم{" "}
      </button>
    </div>
  );
}

export default MakeSales;
