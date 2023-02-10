import logo from './logo.svg';
// import './App.scss';
import "./index.scss"
import Category from './component/category-itme/category-itme';
import CategoriesContainer from './component/categories-container/categories-container';
import { BrowserRouter, Outlet, Route,Routes } from 'react-router-dom';
import Navbar from './component/routes/navbar/navbar';
import Authentication from './component/routes/Authentication/Authentication';
import Shop from './component/shop/shop';
import Checkout from './component/routes/checkout/checkout';
import SubCategory from './component/sub-category/sub-category';



function App() {



  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>} >
            <Route index element={  <CategoriesContainer/>} />
            <Route path='shop' element={  <Shop/>} />
            <Route path='auth' element={  <Authentication/>} />
            <Route path='subcategory/:title' element={<SubCategory/>}/>
            <Route path='checkout' element={  <Checkout/>} />
          </Route>
        </Routes>
      </BrowserRouter>



  );
}

export default App;
