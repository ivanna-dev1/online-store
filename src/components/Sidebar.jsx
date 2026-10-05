import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { catalogLink } from "../utils";

export const Sidebar = ({ isOpen, onClose }) => {
  const { allProducts } = useContext(ProductsContext);
  const [expandedGroup, setExpandedGroup] = useState(null);
  const groups = [...new Set(allProducts.map((product) => product.group))];

  const handleGroupToggle = (groupName) => {
    setExpandedGroup(expandedGroup === groupName ? null : groupName);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose} // Закриваємо, якщо клікнули на фон
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen bg-white shadow-2xl z-50 w-80 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-pink-100 bg-pink-50">
          <h2 className="text-2xl font-bold text-pink-900">Каталог</h2>
          <button
            onClick={onClose}
            className="text-3xl text-gray-400 hover:text-pink-600 transition-colors"
          >
            ×
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-88px)] pb-6">
          <Link
            to="/catalog"
            onClick={onClose}
            className="block mt-4 mx-4 py-2 px-4 rounded-lg font-bold text-pink-800 hover:bg-pink-100"
          >
            Увесь каталог
          </Link>
          <ul className="mt-2 flex flex-col gap-3 ">
            {groups.map((group) => {
              const categories = [
                ...new Set(
                  allProducts
                    .filter((p) => p.group === group)
                    .map((p) => p.category),
                ),
              ];
              return (
                <li key={group} className="flex flex-col ml-2">
                  <button
                    onClick={() => handleGroupToggle(group)}
                    className={`text-left font-bold py-2 px-4 rounded-lg flex justify-between items-center ${
                      expandedGroup === group
                        ? "bg-pink-100 text-pink-800"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{group}</span>
                    <span>{expandedGroup === group ? "−" : "+"}</span>
                  </button>
                  {expandedGroup === group && (
                    <ul className="mt-1 ml-6 flex flex-col gap-1 border-l-2 border-pink-200 pl-4">
                      <li>
                        <Link
                          to={catalogLink(group)}
                          onClick={onClose}
                          className="block py-1 px-3 text-sm font-medium text-pink-700 hover:text-pink-600"
                        >
                          Усі товари групи
                        </Link>
                      </li>
                      {categories.map((sub) => (
                        <li key={sub}>
                          <Link
                            to={catalogLink(group, sub)}
                            onClick={onClose}
                            className="block py-1 px-3 text-sm text-gray-500 hover:text-pink-600"
                          >
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};
