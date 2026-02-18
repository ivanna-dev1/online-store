import { Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";

import { Header } from "./components/Header";
import { AllRoutes } from "./components/AllRoutes";

function App() {
  return (
    <div className="p-4">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
