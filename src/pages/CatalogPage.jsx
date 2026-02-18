import ProductCard from "../ProductCard";
import { useState } from "react";
import products from "../products";
const initialList = products;

export default function CatalogPage() {
  const [products, setProducts] = useState(initialList);
  const cart = [];
  const addToCart = () => {};

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === item.category || selectedCategory === "All";
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-red-500 underline">
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
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "bg-blue-500 text-white px-4 py-2 rounded-lg"
                : "bg-gray-500 text-white px-4 py-2 rounded-lg"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
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
