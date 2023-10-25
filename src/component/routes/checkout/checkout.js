import React, { useState, useEffect } from "react";
import { CartContext } from "../../contexte/cart";
import axios from "axios";

import { useContext } from "react";
import CheckoutItem from "../../checkout-item/checkout-item";
import { PopupContext } from "../../contexte/popup";
import "./checkout.scss";
import Button from "../../button/button";
import Popup from "../../popup/popup";
import { addtalabat } from "../../../utils/firebase/firebase";
import TESTDAT from "../../../shop_data/testdata";
import { Global } from "../../contexte/usercontext";
import { gettalabat } from "../../../utils/firebase/firebase";
import FormInput from "../../fom-input/form-input";
import { useLocation } from "react-router-dom";

const defaultFields = {
  // street: "",
  // phone: "",
  // city: "",
  // name: "",
  name: "qwqwqw",
  city: "wwwww",
  date: "7/13/2023, 12:00:00 AM",
  location_address: "rrrr",
  phone_number: "tttttttt",
  total_price: 100,
  status: "1", // default
  notice: "45454545",
};

function Checkout() {
  const [tt, settt] = useState(false);

  const [done_buying, set_done_buying] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { currentUser, setCurrentUser } = useContext(Global);
  const [view, setview] = useState(false);
  const { cartItems, cartTotal, clearItemCart } = useContext(CartContext);
  const { close, changeState, changeStateFalse } = useContext(PopupContext);

  const [fields, setfields] = useState(defaultFields);

  const [orderData, setOrderData] = useState({
    order: {
      name: "ALI33",
      city: "Nablus3399999",
      date: "2023-10-9 03:26:35",
      location_address: "Nablus-Faisal Street",
      phone_number: "056331234567",
      total_price: 34100,
      status: "1",
      notice: "Greate Product, sent each product indvidual",
    },
    product_for_order: [
      {
        product_id: 34,
        quantity: 1,
        price: 780,
        color: "No color",
        size: "L",
      },
      // Add more products as needed
    ],
  });

  const {
    notice,
    status,
    total_price,
    phone_number,
    location_address,
    date,
    city,
    name,
  } = orderData.order;

  const sendToDatabase = async (event) => {
    console.log("order ------------------------");

    try {
      // console.log("dddddddd", productData);
      const response = await axios.post("http://localhost:9999/user/order/0", {
        order: orderData,
      });
      console.log("order added:", response.data);
      // console.log(response.data.productId);

      // await handleSubmitArraySize(response.data.productId);
    } catch (error) {
      console.error("Error adding order:", error);
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setOrderData({ ...orderData, [name]: value });
  }

  function clear() {
    setfields(defaultFields);
    clearItemCart();
    localStorage.clear();
  }

  // function ff() {
  //   if (currentUser) {
  //     if (
  //       phone_number !== "" &&
  //       location_address !== "" &&
  //       city !== "" &&
  //       name !== ""
  //     ) {
  //       let currentDate = new Date().toJSON().slice(0, 10);
  //       setfields({ ...fields, date: currentDate });

  //       // clear();
  //       set_done_buying(true);
  //     } else {
  //       alert("please enter all information");
  //     }
  //   } else {
  //     setview(true);
  //     changeStateFalse();
  //   }
  // }

  console.log("currentUser", currentUser);

  return (
    <>
      {close ? "" : <Popup />}
      <h1 className="lablee">قائمة الشراء</h1>
      <div className="checkout-container">
        {cartItems.map((cartItem) => {
          return <CheckoutItem cartItem={cartItem} />;
        })}

        <div className="moreinfo">
          <h2>
            {" "}
            <i class="fa-solid fa-car"></i> معلومات لخدمة التوصيل
          </h2>
          <FormInput
            labelName="الأسم"
            optionInput={{
              type: "text",
              required: true,
              onChange: handleChange,
              name: "name",
              value: name,
            }}
          />

          <FormInput
            labelName="رقم الجوال"
            optionInput={{
              type: "text",
              required: true,
              onChange: handleChange,
              name: "phone_number",
              value: phone_number,
            }}
          />

          <FormInput
            labelName="المدينة"
            optionInput={{
              type: "text",
              required: true,
              onChange: handleChange,
              name: "city",
              value: city,
            }}
          />

          <FormInput
            labelName="الشارع أو الحي"
            optionInput={{
              type: "text",
              required: true,
              onChange: handleChange,
              name: "location_address",
              value: location_address,
            }}
          />

          <FormInput
            labelName="ملاحظات عن الطلبية"
            optionInput={{
              type: "text",
              required: true,
              onChange: handleChange,
              name: "notice",
              value: notice,
            }}
          />

          <FormInput
            labelName="الشارع أو الحي"
            optionInput={{
              type: "text",
              required: true,
              onChange: handleChange,
              name: "location_address",
              value: location_address,
            }}
          />

          <FormInput
            labelName="الشارع أو الحي"
            optionInput={{
              type: "text",
              required: true,
              onChange: handleChange,
              name: "location_address",
              value: location_address,
            }}
          />
        </div>
        {done_buying ? (
          <>
            <div className="totalee">
              {" "}
              تمت عملية الشراء بنجاح ستصلك رسالة للتأكيد{" "}
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="lastc">
          <span className="total"> المجموع : {cartTotal}$</span>
          {cartTotal > 0 ? (
            <Button buttonType="google" onClick={sendToDatabase}>
              اتمام الشراء
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
export default Checkout;
