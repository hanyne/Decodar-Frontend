import React  from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { CartProvider } from "react-use-cart";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./components/Signup";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import 'react-toastify/dist/ReactToastify.css';

import "./App.css"
import ProductDetails from "./components/ProductDetails";
import ProductCategory from "./components/ProductCategory";
import SearchResults from "./components/SearchResults";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="*" element={<NotFound />} />

          <Route path="product">
            <Route path=":productId" element={<ProductDetails />} />
            {/*<Route path="*" element={...} />*/}
          </Route>

          <Route path="category">
            <Route path=":categoryName" element={<ProductCategory />} />
            {/*<Route path="*" element={...} />*/}
          </Route>

          <Route path="search">
            <Route path=":keyword" element={<SearchResults />} />
            {/*<Route path="*" element={...} />*/}
          </Route>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
}




export default App;