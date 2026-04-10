
import {  Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return ( <>
      <Header />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/products" element={<Products />} />
       <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App;