import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gettalabat } from "../../utils/firebase/firebase";
import "./talabat.scss";
import { Link } from "react-router-dom";
import { GetOrder } from "../../utils/firebase/firebase";
import { DeleteOrder } from "../../utils/firebase/firebase";
function Orders() {
  const [orders, setorders] = useState([]);
  const [stateOrder, setStateOrder] = useState([
    "الطلب",
    "التحضير",
    "الإرسال",
    "الاستلام",
  ]);
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
    setdata();
  };
  async function getget() {
    console.log("data form order", await GetOrder());
  }

  useEffect(() => {
    setdata();
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
      {/* <button onClick={setdata}>fffffffffffffffffffff</button> */}
      {arrayOfTalabat.map((Element, index) => {
        return (
          <div className={`pack   ${index % 2 === 0 ? "red" : "blue"}`}>
            <div className="back">
              <div className="indexnow"> رقم الطلب {index + 1} </div>

              <div className="order">
                <span className="phone talab">
                  {" "}
                  <span className="frow">الأسم </span> :
                  {Element.name ? Element.name : "ahamd"}{" "}
                </span>
                <span className="phone talab">
                  {" "}
                  <span className="frow">الجوال </span> : {Element.phone}{" "}
                </span>
                <span className="address talab">
                  {" "}
                  <span className="frow">العنوان </span> : {Element.city} -{" "}
                  {Element.street}{" "}
                </span>
                <span className="mony talab">
                  {" "}
                  <span className="frow"> المبلغ للدفع </span> :{" "}
                  {Element.cartTotal}${" "}
                </span>
                <span className="date talab">
                  {" "}
                  <span className="frow"> تاريخ الشراء</span> :{" "}
                  {Element.currentDate}{" "}
                </span>
                <button
                  className="seeOrder gg"
                  onClick={() => {
                    DeleteData(Element.info);
                  }}
                >
                  حذف{" "}
                  <span>
                    {" "}
                    {/* <i class="fa-solid fa-trash gfd"></i>{" "} */}
                  </span>
                </button>
                <Link to="/orderuser" state={{ data: Element }}>
                  <button className="seeOrder lll">
                    عرض{" "}
                    <span>
                      {" "}
                      {/* <i class="fa-solid fa-arrow-right gfd"></i>{" "} */}
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="state">
              {stateOrder.map((item, index) => {
                console.log(index, "---", num_clicked);
                return (
                  <div
                    className={`index greeno ${`index === num_clicked ? "greeno" : "greeno"`}
                      

                    `}
                    onClick={() => toggleClicked(index)}
                  >
                    {" "}
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
