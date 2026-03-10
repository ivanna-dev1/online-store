import React from "react";
import { Routes, Route } from "react-router-dom";
import CatalogPage from "../pages/CatalogPage";
import CartPage from "../pages/CartPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import HomePage from "../pages/HomePage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
    </Routes>
  );
};
