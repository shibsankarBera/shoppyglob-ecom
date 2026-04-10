import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cart.map((item, index) => (
        <div key={index} className="border p-3 mb-3 flex gap-4">
          <img src={item.image} className="h-20" />
          <div>
            <h2>{item.title}</h2>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;