import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // debug
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <h1>Loading...</h1>;

  return (
    <div className="p-5">
      <img src={product.thumbnail} className="h-60" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p className="text-green-600">${product.price}</p>
    </div>
  );
}

export default ProductDetails;