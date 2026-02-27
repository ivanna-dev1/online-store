import ProductCard from "../ProductCard";
import { useState } from "react";
import products from "../products";
import { useCart } from "../context/CartContext";
const initialList = products;

export default function CatalogPage() {
  const [products, setProducts] = useState(initialList);
  const { cart, addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("All");

  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGroup =
      selectedGroup === item.group || selectedGroup === "All";
    return matchesSearch && matchesGroup;
  });

  const groups = ["All", ...new Set(products.map((product) => product.group))];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-pink-900 underline">
        Shop Project
      </h1>
      <input
        className="m-3 p-2 border border-gray-300 rounded-md w-full md:w-1/2 lg:w-1/3"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <section>
        {groups.map((group) => (
          <button
            key={group}
            className={
              selectedGroup === group
                ? "bg-pink-800 text-white px-4 py-2 rounded-lg"
                : "bg-gray-500 text-white px-4 py-2 rounded-lg"
            }
            onClick={() => setSelectedGroup(group)}
          >
            {group}
          </button>
        ))}
      </section>
      <ul className="m-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            addToCart={addToCart}
            isInCart={cart.some((cartItem) => cartItem.id === item.id)}
          />
        ))}
      </ul>
    </div>
  );
}
