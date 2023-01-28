import logo from './logo.svg';
// import './App.scss';
import "./index.scss"
import Category from './component/category-itme/category-itme';
import CategoriesContainer from './component/categories-container/categories-container';
import { BrowserRouter, Outlet, Route,Routes } from 'react-router-dom';
import Navbar from './component/routes/navbar/navbar';


function App() {


  const Shop = ()=>{
    return(
      <div>
        shopeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
      </div>
    )
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>} >
        <Route index element={  <CategoriesContainer/>} />
        <Route path='shop' element={  <Shop/>} />

      </Route>

    </Routes>
        
    </BrowserRouter>

  );
}

export default App;
