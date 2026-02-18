import { Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";

import { useState } from "react";
import { Header } from "./components/Header";
import { AllRoutes } from "./components/AllRoutes";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-4">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
