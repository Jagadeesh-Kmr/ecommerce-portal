import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import StoreFilter from "./StoreFilter";
import SearchBar from "./SearchBar";

const ProductList = () => {
  const { products, deleteProduct } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStore, setSelectedStore] = useState("");

  const filteredProducts = products
    .filter((p) => (selectedStore ? p.storeName === selectedStore : true))
    .filter((p) => p.productName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h2>Product List</h2>
      <StoreFilter stores={[...new Set(products.map((p) => p.storeName))]} setSelectedStore={setSelectedStore} />
      <SearchBar setSearchTerm={setSearchTerm} />

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
