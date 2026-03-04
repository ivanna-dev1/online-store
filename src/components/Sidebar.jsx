import products from "../products";
import { useState } from "react";

export const Sidebar = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState(null);

  const groups = [...new Set(products.map((product) => product.group))];

  // ПОВЕРНУЛИ ФУНКЦІЮ: тепер все чітко і зрозуміло
  const handleGroupToggle = (groupName) => {
    setExpandedGroup(expandedGroup === groupName ? null : groupName);
  };

  return (
    <aside className="w-1/4 bg-white min-h-screen p-6 border-r border-gray-200">
      <div className="flex flex-col gap-2">
        {/* Кнопка Каталогу (звичайна функція-перемикач) */}
        <button
          onClick={() => setIsCatalogOpen(!isCatalogOpen)}
          className={`w-full text-left text-2xl font-bold py-3 px-4 rounded-xl transition-all flex justify-between items-center ${
            isCatalogOpen
              ? "bg-pink-600 text-white"
              : "bg-pink-50 text-pink-900"
          }`}
        >
          <span>Каталог</span>
          <span>{isCatalogOpen ? "▼" : "▶"}</span>
        </button>

        {isCatalogOpen && (
          <ul className="mt-4 flex flex-col gap-3">
            {groups.map((group) => {
              const subCategories = [
                ...new Set(
                  products
                    .filter((p) => p.group === group)
                    .map((p) => p.subCategory),
                ),
              ];

              return (
                <li key={group} className="flex flex-col ml-2">
                  {/* Тепер тут ми знову викликаємо функцію за іменем */}
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
                      {subCategories.map((sub) => (
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
        )}
      </div>
    </aside>
  );
};
