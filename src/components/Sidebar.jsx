import products from "../products";

export const Sidebar = () => {
  const groups = [...new Set(products.map((product) => product.group))];

  return (
    <aside className="w-1/4 bg-gray-50 h-screen p-4 border-r overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul className="flex flex-col gap-2">
        {groups.map((group) => (
          <li key={group}>{group}</li>
        ))}
      </ul>
    </aside>
  );
};
