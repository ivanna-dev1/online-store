import React from "react";
import { Routes, Route } from "react-router-dom";
import CatalogPage from "../pages/CatalogPage";
import CartPage from "../pages/CartPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
