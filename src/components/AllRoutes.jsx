import React from "react";
import { Routes, Route } from "react-router-dom";
import CatalogPage from "../pages/CatalogPage";
import CartPage from "../pages/CartPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};
