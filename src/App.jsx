
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";

function App() {
  return ( <>
      <Header />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}

export default App;