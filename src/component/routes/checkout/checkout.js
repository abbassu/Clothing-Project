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
  name: "",
  city: "",
  date: "",
  location_address: "",
  phone_number: "",
  total_price: 0,
  status: "1", // default
  notice: "",
};

function Checkout() {
  const [done_buying, set_done_buying] = useState(false);

  const { pathname } = useLocation();

  const { currentUser, setCurrentUser } = useContext(Global);

  const { cartItems, cartTotal, clearItemCart } = useContext(CartContext);

  const { close, changeState, changeStateFalse } = useContext(PopupContext);

  const [information_user, set_information_user] = useState({
    name: "",
    city: "",
    date: "",
    location_address: "",
    phone_number: "",
    total_price: 0,
    status: "1",
    notice: "",
  });

  let currentDate = new Date().toJSON().slice(0, 10);

  const [orderData, setOrderData] = useState({
    order: {
      name: information_user.name,
      city: information_user.city,
      date: currentDate,
      location_address: information_user.location_address,
      phone_number: information_user.phone_number,
      total_price: cartTotal,
      status: "1",
      notice: "",
    },
    product_for_order: [
      {
        product_id: 34,
        quantity: 1,
        price: 780,
        color: "No color",
        size: "L",
      },
    ],
  });

  const { notice, phone_number, location_address, city, name } =
    orderData.order;

  const sendToDatabase = async (event) => {
    console.log("before sending to databse", orderData);
    try {
      const response = await axios.post("http://localhost:9999/user/order/0", {
        order: orderData,
      });
      console.log("order added:", response.data);
    } catch (error) {
      console.error("Error adding order:", error);
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    // set_information_user({ ...information_user, [name]: value });

    setOrderData((prevOrderData) => ({
      ...prevOrderData,
      order: {
        ...prevOrderData.order,
        [name]: value,
      },
    }));
  }
  useEffect(() => {
    console.log("order data after change ", information_user);
  }, [information_user]);

  function clear() {
    set_information_user(defaultFields);
    clearItemCart();
    localStorage.clear();
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    console.log("total", cartTotal);
  }, [pathname]);

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
            labelName=" ملاحظات عن الطلبية - اختياري "
            optionInput={{
              type: "text",
              required: true,
              onChange: handleChange,
              name: "notice",
              value: notice,
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
