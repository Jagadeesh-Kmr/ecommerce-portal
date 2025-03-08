import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div>
      <h2>{product.productName}</h2>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <p>Store: {product.storeName}</p>
    </div>
  );
};

export default ProductDetail;
