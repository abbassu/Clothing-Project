// import React, { useState } from "react";
// import FormInput from "../fom-input/form-input";
// import axios from "axios";
// function MakeSales() {
//   const [product_id, setProductId] = useState("");
//   const [product, setProduct] = useState("");
//   const [percent, setPercent] = useState("");

//   const handlePatchRequest = async () => {
//     try {
//       console.log("sas");
//       const response = await axios.put(`http://localhost:9999/admin/sales`, {
//         productID: 117,
//         percent: "11", // or sent new value. As below
//         type: "p", // ( p :-> percent ), <--> , ( n :-> number )
//       });

//       console.log("respones", response);
//     } catch (error) {
//       // Handle fetch errors
//       console.error("faild to add sales :-------", error);
//     }
//   };

//   const handleChangePercent = (event) => {
//     const valuePercent = event.target.value;
//     setPercent(valuePercent);
//   };

//   return (
//     <div className="fffa">
//       <h1 className="lable"> عمل تخفيضات </h1>
//       <div className="searchFilter ddd">
//         <div className="boxing uu"></div>
//       </div>
//       <input
//         type="text"
//         placeholder="percent of sale"
//         value={percent}
//         onChange={handleChangePercent}
//       />
//       <br />
//       <br />
//       <button
//         onClick={() => {
//           handlePatchRequest();
//         }}
//       >
//         عمل خصم{" "}
//       </button>
//     </div>
//   );
// }

// export default MakeSales;

import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../contexte/product";
import "./../deleteitem/delete.scss";
import { DeleteProduct } from "../../utils/firebase/firebase";
import axios from "axios";
import Button from "../button/button";
import FormInput from "../fom-input/form-input";
function MakeSales() {
  const { product } = useContext(ProductContext);
  const [product11, setProduct11] = useState(null);
  const [parcent, setpercent] = useState();
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [name_product, setProduct] = useState("");
  const [NumDelete, setNumDelete] = useState(false);
  const [ifEnterOnSales, setIfEnterOnSales] = useState(false);
  const [if_make_salse_done, set_if_make_salse_done] = useState(false);
  // function selectType(event) {
  //   setTextSearch(event.target.value);
  //   console.log("search by ", event.target.value);
  //   setrr("");
  // }
  // function selectOn(event) {
  //   setSearchOn(event.target.value);
  //   console.log("search on ", event.target.value);
  //   console.log("search onnnnn ", product);
  //   let updatedList = [];
  //   Object.keys(product).filter((element) => {
  //     if (element.toLowerCase() === event.target.value.toLowerCase()) {
  //       updatedList = product[element];
  //     } else {
  //     }
  //   });
  //   console.log("items ", updatedList);
  //   setarr(updatedList);
  //   setarrOfTalabat(updatedList);
  //   setrr("");
  // }
  const handlePatchRequest = async () => {
    try {
      console.log("sas");
      const response = await axios.put(`http://localhost:9999/admin/sales`, {
        productID: name_product,
        percent: parcent, // or sent new value. As below
        type: "p", // ( p :-> percent ), <--> , ( n :-> number )
      });

      console.log("respones", response);
    } catch (error) {
      // Handle fetch errors
      console.error("faild to add sales :-------", error);
    }
  };
  const showStateAlert = () => {
    setDeleteAlert(true);
  };

  const hideStateAlert = () => {
    setDeleteAlert(false);
  };

  const deleteProduct = async (product_id) => {
    console.log("orderid", product_id);
    try {
      const response = await axios.delete(
        `http://localhost:9999/admin/product?product_id=${product_id}`
      );
      console.log(`Order with order_id ${product_id} deleted successfully.`);
      // You can update your UI or perform other actions here.
      handleReload();
    } catch (error) {
      hideStateAlert();

      console.error(
        `Failed to delete order with order_id ${product_id}. Error:`,
        error
      );
    }
  };
  function handleChangeParcent(per) {
    console.log("persent", per.target.value);
    if (per.target.value >= 0) {
      setpercent(per.target.value);
    }
  }

  function handleChange(event) {
    const text = event.target.value;
    setProduct(text);
  }
  const fetchProductDetails = async () => {
    console.log("in fetch ", name_product);
    try {
      const response = await fetch(
        `http://localhost:9999/product/productDetails?id=${name_product}&isDetail=0`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setProduct11(data.Product[0]); // Update state with fetched product details
      console.log("Product Details:", data.Product[0]);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const makesalesnow = async () => {
    if (parcent > 0) {
      try {
        console.log("sas");
        const response = await axios.put(`http://localhost:9999/admin/sales`, {
          productID: name_product,
          percent: parcent, // or sent new value. As below
          type: "p", // ( p :-> percent ), <--> , ( n :-> number )
        });
        console.log("respones", response);

        set_if_make_salse_done(true);
      } catch (error) {
        console.error("faild to add sales :-------", error);
      }
    } else {
      setNumDelete(true);
    }
  };

  const handleReload = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className="delete_page">
      <h1 className="lable"> Make Sales</h1>
      <div className="input_id_product">
        <FormInput
          labelName="رقم المنتج للعرض "
          optionInput={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "id",
            value: name_product,
          }}
        />{" "}
      </div>

      <div className="button_search">
        <Button buttonType="google" onClick={fetchProductDetails}>
          {" "}
          بحث{" "}
        </Button>
      </div>
      <hr />

      <div className="product-details">
        {product11 ? (
          <>
            <div className="In_delete">
              <h2>
                {" "}
                اسم المنتج <br /> {product11.name}
              </h2>
              <div className="photoproduct">
                <img src={product11.url_primary_image} alt="Product Image" />
              </div>

              <p>
                {" "}
                <div>رقم المنتج</div> {product11.id}
              </p>
              <p>
                <div>التكلفة</div>${product11.cost}
              </p>
              <p>
                {" "}
                <div>الكمية</div> {product11.quantity}
              </p>
              <p>
                <div> رقم القسم </div> {product11.department_id}
              </p>
              <p>
                {" "}
                <div> الماركة </div> {product11.BrandName}
              </p>
              <p>
                {" "}
                <div> الكمية المباعة </div> {product11.number_of_sales}
              </p>
            </div>
          </>
        ) : (
          <></>
          // <p>Loading product details...</p>
        )}
      </div>

      <div className="input_id_product">
        <FormInput
          labelName="نسبة الخصم"
          optionInput={{
            type: "number",
            required: true,
            onChange: handleChangeParcent,
            name: "parcent",
            value: parcent,
          }}
        />{" "}
      </div>
      {if_make_salse_done ? (
        <div className="button_search">
          <Button buttonType="accept" onClick={makesalesnow}>
            {" "}
            تمت عملية الخصم{" "}
          </Button>
        </div>
      ) : (
        <div className="button_search">
          <Button buttonType="google" onClick={makesalesnow}>
            {" "}
            خصم{" "}
          </Button>
        </div>
      )}
      {/* <div className="button_search">
        <Button buttonType="google" onClick={makesalesnow}>
          {" "}
          خصم{" "}
        </Button>
      </div> */}
    </div>
  );
}
export default MakeSales;
