import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./order_list.scss";

function Order_OrderList(props) {
  const [stateOrder, setStateOrder] = useState([
    "الطلب",
    "التحضير",
    "الإرسال",
    "الاستلام",
  ]);

  const [num_state, set_num_state] = useState(0);

  const Changecolor = (index) => {
    if (index > num_state) {
      set_num_state(index);
    }
  };

  const deleteOrder = async (orderid) => {
    console.log("orderid", orderid);
    try {
      const response = await axios.delete(
        `http://localhost:9999/admin/order?order_id=${orderid}`
      );
      console.log(`Order with order_id ${orderid} deleted successfully.`);
      // You can update your UI or perform other actions here.
    } catch (error) {
      console.error(
        `Failed to delete order with order_id ${orderid}. Error:`,
        error
      );
    }
  };

  // const deleteOrder = () => {
  //   const orderId = 3; // Replace with the order_id you want to delete
  //   const url = `${APIURL}/admin/order?order_id=${orderId}`;

  //   fetch(url, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log(`Order with order_id ${orderId} deleted successfully.`);
  //         // You can update your UI or perform other actions here.
  //       } else {
  //         console.error(`Failed to delete order with order_id ${orderId}.`);
  //       }
  //     })
  //     .catch((error) => console.error('Error:', error));
  // };

  useEffect(() => {
    console.log("munstate", num_state);
  }, [num_state]);

  return (
    <div>
      <div className="back">
        <div className="indexnow"> رقم الطلب {props.index + 1} </div>

        <div className="order">
          <span className="phone talab">
            {" "}
            <span className="frow">الأسم </span> :
            {props.name ? props.name : "ahamd"}{" "}
          </span>
          <span className="phone talab">
            {" "}
            <span className="frow">الجوال </span> : {props.phone}{" "}
          </span>
          <span className="address talab">
            {" "}
            <span className="frow">العنوان </span> : {props.city} -{" "}
            {props.street}{" "}
          </span>
          <span className="mony talab">
            {" "}
            <span className="frow"> المبلغ للدفع </span> : {props.cartTotal}${" "}
          </span>
          <span className="date talab">
            {" "}
            <span className="frow"> تاريخ الشراء</span> : {props.currentDate}{" "}
          </span>
          <button
            className="seeOrder gg"
            onClick={() => {
              deleteOrder(props.order_id);
            }}
          >
            حذف <span> {/* <i class="fa-solid fa-trash gfd"></i>{" "} */}</span>
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
          return (
            <div
              className={`index   ${
                index <= num_state ? "gren" : console.log(index)
              }`}
              onClick={() => Changecolor(index)}
            >
              {" "}
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Order_OrderList;
