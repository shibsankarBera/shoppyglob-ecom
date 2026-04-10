
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-3xl font-bold text-blue-600 text-center mt-10">ShoppyGlobe</h1>

      <div className="space-x-4">
         <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
}

export default Header;