import products from "../products";
import { useState } from "react";

export const Sidebar = () => {
  const [expandedGroup, setExpandedGroup] = useState(null);

  const groups = [...new Set(products.map((product) => product.group))];

  const categories = products.filter((product) => product.group === groupName).map(product => product.category);
  const uniqueCategories = [...new Set(categories)];

  const handleToggle = (groupName) => {
    setExpandedGroup(expandedGroup === groupName ? null : groupName);
  };

  return (
    <aside className="w-1/4 bg-gray-50 h-screen p-4 border-r overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul className="flex flex-col gap-2">
        {groups.map((group) => (

          <li key={group}> <button onClick={() => handleToggle(group)}>{group}</button>
            {expandedGroup === group && (
              const categories = products.filter((product) => product.group === group).map(product => product.category);
            const uniqueCategories = [...new Set(categories)];

            <ul>
              {uniqueCategories.map(category => (
                <li key={category}>{category}</li>
              ))}
            </ul>
            )}
          </li>

        ))
        }
      </ul >
    </aside >
  );
};
