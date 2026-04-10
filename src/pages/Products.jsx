import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <div className="border p-4 rounded shadow cursor-pointer">
              <img src={item.image || item.thumbnail} className="h-40 mx-auto" />
              <h2>{item.title}</h2>
              <p>${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
