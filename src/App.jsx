import { Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";

import { Header } from "./components/Header";
import { AllRoutes } from "./components/AllRoutes";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col min-h-screen p-4 bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar title="Продукти" />
        <main className="flex-1">
          <AllRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;
