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

  const addProduct = (newProduct) => {
    setAllProducts((prev) => [...prev, newProduct]);
  };

  return (
    <ProductsContext.Provider value={{ allProducts, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}
