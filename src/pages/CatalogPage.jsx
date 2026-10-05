import ProductCard from "../ProductCard";
import { useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ProductsContext } from "../context/ProductsContext";

export default function CatalogPage() {
  const { allProducts } = useContext(ProductsContext);
  const { cart, addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";
  const selectedGroup = searchParams.get("group") || "All";
  const selectedCategory = searchParams.get("category") || "";
  const [inputValue, setInputValue] = useState(searchTerm);
  const [prevSearchTerm, setPrevSearchTerm] = useState(searchTerm);

  if (searchTerm !== prevSearchTerm) {
    setPrevSearchTerm(searchTerm);
    setInputValue(searchTerm);
  }

  const updateFilters = ({ q, group, category }) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (group && group !== "All") params.set("group", group);
    if (category) params.set("category", category);
    setSearchParams(params);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    updateFilters({
      q: inputValue.trim(),
      group: selectedGroup,
      category: selectedCategory,
    });
  };

  const clearSearch = () => {
    setInputValue("");
    updateFilters({ group: selectedGroup, category: selectedCategory });
  };

  const selectGroup = (group) => {
    setInputValue("");
    updateFilters({ group });
  };

  const selectCategory = (category) => {
    updateFilters({ q: searchTerm, group: selectedGroup, category });
  };

  const filteredProducts = allProducts.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGroup =
      selectedGroup === "All" || selectedGroup === item.group;
    const matchesCategory =
      !selectedCategory || selectedCategory === item.category;
    return matchesSearch && matchesGroup && matchesCategory;
  });

  const groups = [
    "All",
    ...new Set(allProducts.map((product) => product.group)),
  ];

  const categories =
    selectedGroup === "All"
      ? []
      : [
          ...new Set(
            allProducts
              .filter((product) => product.group === selectedGroup)
              .map((product) => product.category),
          ),
        ];

  return (
    <div className="p-1 sm:p-4">
      <h1 className="text-3xl font-bold text-pink-900 underline">
        FreshStore!
      </h1>
      <form
        onSubmit={handleSearch}
        className="m-3 flex gap-2 w-full md:w-1/2 lg:w-1/3"
      >
        <div className="relative flex-1">
          <input
            className="p-2 pr-8 border border-gray-300 rounded-md w-full"
            type="text"
            placeholder="Пошук..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {(inputValue || searchTerm) && (
            <button
              type="button"
              onClick={clearSearch}
              aria-label="Очистити пошук"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-gray-400 hover:text-pink-600"
            >
              ×
            </button>
          )}
        </div>
        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-4 py-2 rounded-md transition-colors"
        >
          Шукати
        </button>
      </form>

      <Breadcrumbs
        group={selectedGroup !== "All" ? selectedGroup : null}
        category={selectedCategory || null}
      />

      <section>
        {groups.map((group) => (
          <button
            key={group}
            className={
              selectedGroup === group
                ? "bg-pink-800 text-white px-4 py-2 rounded-lg mr-1 mb-1"
                : "bg-gray-500 text-white px-4 py-2 rounded-lg mr-1 mb-1"
            }
            onClick={() => selectGroup(group)}
          >
            {group === "All" ? "Усі" : group}
          </button>
        ))}
      </section>

      {categories.length > 0 && (
        <section className="mt-2">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "bg-pink-200 text-pink-900 border border-pink-500 px-3 py-1 text-sm rounded-lg mr-1 mb-1"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-pink-400 px-3 py-1 text-sm rounded-lg mr-1 mb-1"
              }
              onClick={() =>
                selectCategory(selectedCategory === category ? "" : category)
              }
            >
              {category}
            </button>
          ))}
        </section>
      )}

      {filteredProducts.length === 0 ? (
        <p className="m-5 text-gray-500">
          Нічого не знайдено 🔍 Спробуйте змінити запит або фільтри.
        </p>
      ) : (
        <ul className="my-5 sm:m-5 grid grid-cols-[repeat(auto-fill,13rem)] justify-center gap-4">
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              addToCart={addToCart}
              isInCart={cart.some((cartItem) => cartItem.id === item.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
