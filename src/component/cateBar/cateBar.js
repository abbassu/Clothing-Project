import React from "react";
import Category from "../category-preview/category-preview";
import { useContext } from "react";
import { ProductContext } from "../contexte/product";

function CateBar() {
  const { product } = useContext(ProductContext);

  return (
    <div>
      {Object.keys(product).map((title) => {
        const item = product[title];
        return <Category title={title} products={item} />;
      })}
    </div>
  );
}

export default CateBar;
