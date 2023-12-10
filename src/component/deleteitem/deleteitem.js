import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../contexte/product";
import "./delete.scss";
import { DeleteProduct } from "../../utils/firebase/firebase";
import axios from "axios";
import FormInput from "../fom-input/form-input";
function DeleteItem() {
  const [textSearch, setTextSearch] = useState("");
  const [rr, setrr] = useState("");
  const [SearchOn, setSearchOn] = useState("");
  const [arr, setarr] = useState([]);

  const [orders, setorders] = useState([]);
  const [arrayOfTalabat, setarrOfTalabat] = useState([]);
  const { product } = useContext(ProductContext);

  const [uu, setuu] = useState("");
  const [product11, setProduct11] = useState(null);

  function selectType(event) {
    setTextSearch(event.target.value);
    console.log("search by ", event.target.value);
    setrr("");
  }
  function selectOn(event) {
    setSearchOn(event.target.value);
    console.log("search on ", event.target.value);
    console.log("search onnnnn ", product);
    let updatedList = [];
    Object.keys(product).filter((element) => {
      if (element.toLowerCase() === event.target.value.toLowerCase()) {
        updatedList = product[element];
      } else {
      }
    });
    console.log("items ", updatedList);
    setarr(updatedList);
    setarrOfTalabat(updatedList);
    setrr("");
  }

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
      console.error(
        `Failed to delete order with order_id ${product_id}. Error:`,
        error
      );
    }
  };

  function searchFilter(event) {
    console.log(event.target.value);
  }

  function Deleteitem(iddd) {}
  function Save() {
    console.log("searcj on", SearchOn);
    DeleteProduct(SearchOn, arr, uu);
  }
  const [name_product, setProduct] = useState("");
  function handleChange(event) {
    const text = event.target.value;
    setProduct(text);
  }
  const fetchProductDetails = async () => {
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

  const handleReload = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className="fffa">
      <h1 className="lable">Delete Item</h1>
      <div className="searchFilter ddd">
        <div className="boxing uu"></div>
      </div>
      <div>
        <FormInput
          labelName="ID for product "
          optionInput={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "id",
            value: name_product,
          }}
        />{" "}
        <button onClick={fetchProductDetails}>بحث</button>{" "}
      </div>

      <div className="product-details">
        {product11 ? (
          <>
            <div className="In_delete">
              <h2> Name: {product11.name}</h2>
              <img src={product11.url_primary_image} alt="Product Image" />

              <p>ID: {product11.id}</p>
              <p>Cost: ${product11.cost}</p>
              <p>Quantity: {product11.quantity}</p>
              <p>Department ID: {product11.department_id}</p>
              <p>Brand Name: {product11.BrandName}</p>
              <p>Number of Sales: {product11.number_of_sales}</p>
            </div>
            <div>
              <button
                onClick={() => {
                  deleteProduct(product11.id);
                }}
              >
                حذف
              </button>{" "}
            </div>
          </>
        ) : (
          <></>
          // <p>Loading product details...</p>
        )}
      </div>
    </div>
  );
}
export default DeleteItem;
