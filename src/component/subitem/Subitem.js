import React from "react";
import { Outlet } from "react-router-dom";
import SubCategory from "../sub-category/sub-category";

function Subitem() {
  return (
    <div className="">
      abbas
      {/* <SubCategory /> */}
      <Outlet />
    </div>
  );
}

export default Subitem;
