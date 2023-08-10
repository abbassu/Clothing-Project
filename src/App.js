import logo from "./logo.svg";
import "./index.scss";
import Category from "./component/category-itme/category-itme";
import CategoriesContainer from "./component/categories-container/categories-container";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./component/routes/navbar/navbar";
import Authentication from "./component/routes/Authentication/Authentication";
import Shop from "./component/shop/shop";
import Checkout from "./component/routes/checkout/checkout";
import SubCategory from "./component/sub-category/sub-category";
import Layout from "./component/layout/layout";
import Cartpopup from "./component/cart-popup/cart-popup";
import AddItem from "./component/additem/additem";
import Orders from "./component/talabat/talabat";
import Operation from "./component/operation/Operation";
import OrderUser from "./component/order/order";
import DeleteItem from "./component/deleteitem/deleteitem";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Subitem from "./component/subitem/Subitem";
import CateBar from "./component/cateBar/cateBar";
import Updateitem from "./component/updateitem/Updateitem";
import MakeSales from "./component/makesales/makeSales";
import Deletedepartment from "./component/routes/deletedepartment/deletedepartment";
import Adddepartment from "./component/routes/adddepartment/adddepartment";
import Updatedepartment from "./component/routes/updatedepartment/updatedepartment";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CategoriesContainer />} />
          <Route path="shop" element={<Shop />}>
            <Route path="catebar" index element={<CateBar />} />
            <Route path=":title" element={<SubCategory />} />
          </Route>
          <Route path="updatedepartment" element={<Updatedepartment />} />
          <Route path="deletedepartment" element={<Deletedepartment />} />
          <Route path="adddepartment" element={<Adddepartment />} />
          <Route path="clicked/:prod" element={<Cartpopup />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="additem" element={<AddItem />} />
          <Route path="updateitem" element={<Updateitem />} />
          <Route path="makesales" element={<MakeSales />} />
          <Route path="deleteitem" element={<DeleteItem />} />
          <Route path="operation" element={<Operation />}></Route>
          <Route path="orders" element={<Orders />} />
          <Route path="orderuser" element={<OrderUser />} />
          <Route path="Subitem" element={<Subitem />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
