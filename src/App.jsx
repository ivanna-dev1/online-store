import { Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import { useState } from "react";
import { Header } from "./components/Header";
import { AllRoutes } from "./components/AllRoutes";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen p-4 bg-gray-100 relative">
      <Header onOpenCatalog={() => setIsSidebarOpen(true)} />
      <div className="flex flex-1">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="flex-1">
          <AllRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;
