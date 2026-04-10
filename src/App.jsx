
import {  Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { Link } from "react-router-dom";

function App() {
  return ( <>
      <Header />
       

       <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App;