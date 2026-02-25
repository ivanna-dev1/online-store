import React from "react";
import { Routes, Route } from "react-router-dom";
import CatalogPage from "../pages/CatalogPage";
import CartPage from "../pages/CartPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
    </Routes>
  );
};
