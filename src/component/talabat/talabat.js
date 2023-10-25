import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gettalabat } from "../../utils/firebase/firebase";
import "./talabat.scss";
import { Link } from "react-router-dom";
import { GetOrder } from "../../utils/firebase/firebase";
import { DeleteOrder } from "../../utils/firebase/firebase";

import Order_OrderList from "../Order_OrderList/Order_OrderList";
function Orders() {
  const [orders, setorders] = useState([]);

  const navigate = useNavigate();
  const [arrayOfTalabat, setarrOfTalabat] = useState([]);
  const [textSearch, setTextSearch] = useState();

  const [redd, setred] = useState(1);

  async function setdata() {
    let d = await gettalabat();
    setorders(d);
    setarrOfTalabat(d);
  }
  const [clickedItems, setClickedItems] = useState([]);
  const [num_clicked, set_num_clicked] = useState(0);

  const toggleClicked = (index) => {
    console.log("index :", index);
    set_num_clicked(index);
  };

  const DeleteData = async (element) => {
    await DeleteOrder(element);
    // setdata();
  };
  async function getget() {
    console.log("data form order", await GetOrder());
  }

  useEffect(() => {
    // setdata();
  }, []);

  function searchFilter(event) {
    console.log(event.target.value);
    console.log("search by ", textSearch);

    let updatedList = [];
    updatedList = orders.filter((element) => {
      return element[textSearch]
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setarrOfTalabat(updatedList);
  }

  function selectType(event) {
    setTextSearch(event.target.value);
  }
  useEffect(() => {
    console.log("/admin/orders", arrayOfTalabat);
  }, [arrayOfTalabat]);

  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9999/admin/orders") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setarrOfTalabat(data.Orders))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1 className="lablee">جميع الطلبات</h1>
      {/* <button onClick={getget}>  gg</button> */}
      <div className="searchFilter">
        <div className="boxing uu">
          <span className="search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            name=""
            className="inin inputClass"
            id=""
            onChange={searchFilter}
          />
        </div>
        <div className="boxing">
          <span className="search">البحث من خلال</span>
          <select name="" id="" className="inin kk" onChange={selectType}>
            <option value="phone">الجوال</option>
            <option value="name">الاسم</option>
            <option value="currentDate">تاريخ الشراء</option>
          </select>
        </div>
      </div>

      {arrayOfTalabat.map((Element, index) => {
        return (
          <div className={`pack `}>
            <Order_OrderList
              index={index}
              city={Element.city}
              order_id={Element.order_id}
              name={Element.name}
              phone={Element.phone_number}
              currentDate={new Date(Element.date).toLocaleString()}
              cartTotal={Element.total_price}
              location_address={Element.location_address}
              status={Element.status}
              notice={Element.notice}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
