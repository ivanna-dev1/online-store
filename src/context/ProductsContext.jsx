import { createContext, useState, useEffect } from "react";
import products from "../products";

export const ProductsContext = createContext();
export default function ProductsProvider({ children }) {
  const [allProducts, setAllProducts] = useState(() => {
    const saveProducts = localStorage.getItem("online_store_all_products");
    return saveProducts ? JSON.parse(saveProducts) : products;
  });

  useEffect(() => {
    localStorage.setItem(
      "online_store_all_products",
      JSON.stringify(allProducts),
    );
  }, [allProducts]);

  const deleteProduct = (id) => {
    setAllProducts((prev) => prev.filter((prod) => prod.id !== id));
  };

  const addProduct = (newProduct) => {
    setAllProducts((prev) => [...prev, newProduct]);
  };
  const updateProduct = (updatedProduct) => {
    setAllProducts((prev) =>
      prev.map((prod) =>
        prod.id === updatedProduct.id ? updatedProduct : prod,
      ),
    );
  };
  return (
    <ProductsContext.Provider
      value={{ allProducts, addProduct, deleteProduct, updateProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
