import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  //product filter instantly by type
  //states
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);
  ///data feth
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  // filtering logic based on search input
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );
  //Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  ///handel add to cart func
  const handleAddToCart = (product) => {
    const updated = [...cart, { ...product, qty: 1 }];
    setCart(updated);
  };
  

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Products</h1>
      {/* input field in products page */}
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredProducts.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <div className="border p-4 rounded shadow cursor-pointer">
              <img
                src={item.image || item.thumbnail}
                className="h-40 mx-auto"
              />
              <h2>{item.title}</h2>
              <p>${item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-blue-500 text-white px-3 py-1 mt-2"
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
