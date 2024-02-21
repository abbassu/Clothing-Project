// YourComponent.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./showitem.scss";
import One_quantity from "./one_quantity";

const YourComponent = (props) => {
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(null);

  console.log("fgllll");

  useEffect(() => {
    console.log("fgggg");
    const fetchData = async () => {
      try {
        console.log("try", props.id_product);

        const response = await axios.get(
          `http://localhost:9999/product/productDetails?id=${props.id_product}&isDetail=1`
        );
        setProductDetails(response.data.Product[0]);
        setError();

        console.log("response.data.Product[0]", response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [props.id_product]);

  return (
    <div className="product-details">
      <h1>تفاصيل المنتج</h1>

      {error ? (
        <p>Error: {error}</p>
      ) : productDetails ? (
        <div>
          <h2>{productDetails.name}</h2>
          <div className="details-list">
            {productDetails.Details.map((detail, index) => (
              <div key={index} className="detail-item">
                <h3>{detail.color_name}</h3>
                <ul>
                  {detail.DetailSizes.map((size, idx) => (
                    <One_quantity
                      name={size.size_name}
                      id={size.detail_size_id}
                      quantity={size.quantity}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default YourComponent;
