import products from "../products";
import { useState } from "react";

export const Sidebar = ({ isOpen, onClose }) => {
  const [expandedGroup, setExpandedGroup] = useState(null);
  const groups = [...new Set(products.map((product) => product.group))];

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
        {/* Кнопка Каталогу (звичайна функція-перемикач) */}

        <div className="flex justify-between items-center p-6 border-b border-pink-100 bg-pink-50">
          <h2 className="text-2xl font-bold text-pink-900">Каталог</h2>
          <button
            onClick={onClose}
            className="text-3xl text-gray-400 hover:text-pink-600 transition-colors"
          >
            ×
          </button>
        </div>
        <div>
          <ul className="mt-4 flex flex-col gap-3 ">
            {groups.map((group) => {
              // ЦЕЙ РЯДОК ДУЖЕ ВАЖЛИВИЙ! Ми кажемо: "Знайди всі підкатегорії для цієї групи"
              const categories = [
                ...new Set(
                  products
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
                  {/* Тепер тут categories буде працювати правильно */}
                  {expandedGroup === group && (
                    <ul className="mt-1 ml-6 flex flex-col gap-1 border-l-2 border-pink-200 pl-4">
                      {categories.map((sub) => (
                        <li
                          key={sub}
                          className="py-1 px-3 text-sm text-gray-500 hover:text-pink-600 cursor-pointer"
                        >
                          {sub}
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
