import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductForm = () => {
  const { addProduct } = useContext(ProductContext);
  const [product, setProduct] = useState({ productName: "", description: "", price: "", storeName: "" });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ productName: "", description: "", price: "", storeName: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="productName" placeholder="Product Name" value={product.productName} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
      <input type="text" name="storeName" placeholder="Store Name" value={product.storeName} onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
