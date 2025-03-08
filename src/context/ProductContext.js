import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetch products from local JSON file
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  // Add Product
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now().toString() }]);
  };

  // Edit Product
  const editProduct = (updatedProduct) => {
    setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
  };

  // Delete Product
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, editProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
