import React, { useState, Fragment, useParams } from "react";
import SHOP_DATA from "../../shop_data/data";
import { ProductContext } from "../contexte/product";
import { useContext } from "react";
import ProductCard from "../productCard/product-card";
import "./shop.scss";
import Category from "../category-preview/category-preview";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import SearchBox from "../searchbox/SearchBox";
import { useEffect } from "react";

function Shop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const navigate = useNavigate();
  const rout = (title) => {
    navigate(`/shop/${title}`);
  };

  const { product } = useContext(ProductContext);
  const [arr_product, set_arr_product] = useState(product);

  const styles_w = {
    color: "#44ca6c",
  };

  const styles_f = {
    color: "#1152e8",
  };
  return (
    <div className="shopPage">
      <div className="shpe">
        <SearchBox />
        <Outlet />
      </div>

      <div className="listCategory">
        <h2
          className="listlist headd"
          onClick={() => {
            navigate(`/shop/catebar`);
          }}
        >
          Category
        </h2>
        {Object.keys(product).map((title) => {
          const item = product[title];
          return (
            <>
              <h2
                className="listlist kkk"
                onClick={() => {
                  rout(title);
                }}
              >
                <span className="title">{title.toUpperCase()}</span>
              </h2>
            </>
          );
        })}

        <h2 className="listlist headd">
          <i className="fa-brands fa-facebook fa-xl " style={styles_f}></i>
        </h2>
        <h2 className="listlist headd">
          <i class="fa-brands fa-whatsapp fa-xl" style={styles_w}></i>
        </h2>
      </div>
    </div>
  );
}
export default Shop;
