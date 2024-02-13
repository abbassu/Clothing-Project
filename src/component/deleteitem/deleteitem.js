import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../contexte/product";
import "./delete.scss";
import { DeleteProduct } from "../../utils/firebase/firebase";
import axios from "axios";
import Button from "../button/button";
import FormInput from "../fom-input/form-input";
function DeleteItem() {
  // const [textSearch, setTextSearch] = useState("");
  // const [rr, setrr] = useState("");
  // const [SearchOn, setSearchOn] = useState("");
  // const [arr, setarr] = useState([]);
  // const [orders, setorders] = useState([]);
  // const [arrayOfTalabat, setarrOfTalabat] = useState([]);
  const { product } = useContext(ProductContext);
  const [product11, setProduct11] = useState(null);
  const [deleteAlert, setDeleteAlert] = useState(false);

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

  const showStateAlert = () => {
    setDeleteAlert(true);
  };

  const hideStateAlert = () => {
    setDeleteAlert(false);
  };
  const [name_product, setProduct] = useState("");

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

  const handleReload = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className="delete_page">
      <h1 className="lable">Delete Item</h1>
      <div className="input_id_product">
        <FormInput
          labelName="رقم المنتج الذي تريد حذفه"
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

      <div className="product-details">
        {product11 ? (
          <>
            <div className="In_delete">
              <h2>
                {" "}
                اسم المنتج <br /> {product11.name}
              </h2>
              <img src={product11.url_primary_image} alt="Product Image" />

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

            <div className="button_delete">
              <Button buttonType="delete" onClick={() => showStateAlert()}>
                {" "}
                حذف{" "}
              </Button>
            </div>

            {deleteAlert ? (
              <Alert_before_delete
                hideStateAlert={hideStateAlert}
                deleteProduct={deleteProduct}
                id={name_product}
              />
            ) : (
              <></>
            )}
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

function Alert_before_delete(props) {
  return (
    <div className="alert-before-delete">
      <div className="delete-post" onClick={() => props.hideStateAlert()}>
        {" "}
        &#10005;{" "}
      </div>
      <div className="text-delete">هل انت متأكد من حذف المنتج؟</div>

      <Button onClick={() => props.hideStateAlert()}> لا </Button>
      <br />

      <Button buttonType="delete" onClick={() => props.deleteProduct(props.id)}>
        {" "}
        نعم{" "}
      </Button>
    </div>
  );
}

function Alert_after_delete() {
  return <div className="alert-after-delete">تم حذف المنتج بنجاح</div>;
}
