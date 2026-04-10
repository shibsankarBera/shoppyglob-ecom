
import {  Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
  return ( <>
      <Header />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      
        <Route path="/products" element={<Products />} />
       <Route path="/product/:id" element={<ProductDetails />} />
       <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App;