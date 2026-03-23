import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { AdminProductCard } from "../components/AdminProductCard";

export default function AdminPage() {
  const { allProducts, addProduct, deleteProduct, updateProduct } =
    useContext(ProductsContext);
  const [formData, setFormData] = useState({
    name: "",
    group: "",
    category: "",
    price: "",
    onSale: false,
    discount: null,
    isNew: false,
    inStock: true,
    image: "",
    description: "",
    fullDescription: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [view, setView] = useState("add");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const id = allProducts.length + 1;
  const groups = [...new Set(allProducts.map((product) => product.group))];
  const categories = [
    ...new Set(
      allProducts
        .filter((product) => product.group === formData.group)
        .map((product) => product.category),
    ),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.id && updateProduct(formData);
    !formData.id &&
      addProduct({ ...formData, price: Number(formData.price), id });
    setFormData({
      name: "",
      group: "",
      category: "",
      price: "",
      onSale: false,
      discount: null,
      isNew: false,
      inStock: true,
      image: "",
      description: "",
      fullDescription: "",
    });
    setShowSuccess(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => setShowSuccess(false), 3000);
  };
  console.log("formData", formData);

  // редагування продукту
  const handleUpdate = (product) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // всі інпути заповняться даними продукту
    setFormData(product);
    // переключитися на вкладку додавання
    setView("add");
  };
  return (
    <div>
      <h1 className="text-4xl flex justify-center items-center font-bold text-center text-pink-900 mt-10 mb-5">
        Сторінка адміністратора
      </h1>
      <p className="flex justify-center items-center text-md font-bold text-center text-pink-800 m-5">
        Всього товарів: {allProducts.length}
      </p>
      {showSuccess && (
        <div className="flex justify-center items-center text-2xl font-bold text-center text-blue-400 m-5">
          Товар успішно додано в каталог!
        </div>
      )}
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex justify-between items-center lg:w-1/3 w-1/2 mb-5 bg-blue-100 rounded-lg">
          <button
            onClick={() => setView("add")}
            className={
              view === "add"
                ? " bg-blue-300 text-blue-800 px-4 py-2 hover:bg-blue-300 w-1/2 rounded-lg transition-all"
                : " bg-blue-100 text-blue-800 px-4 py-2 hover:bg-blue-300 w-1/2 rounded-lg transition-all"
            }
          >
            Додати товар
          </button>
          <button
            onClick={() => setView("manage")}
            className={
              view === "manage"
                ? " bg-blue-300 text-blue-800 px-4 py-2 hover:bg-blue-300 w-1/2 rounded-lg transition-all"
                : " bg-blue-100 text-blue-800 px-4 py-2 hover:bg-blue-300 w-1/2 rounded-lg transition-all"
            }
          >
            Керувати товарами
          </button>
        </div>
        {view === "add" && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center justify-center lg:w-1/3 w-1/2 shadow-2xl bg-white p-10 rounded-2xl"
          >
            <p className="text-2xl font-bold text-center text-gray-500 mb-5">
              Додавання нового товару
            </p>
            <p className="text-gray-500 border border-pink-200 rounded-lg p-2 pl-5 w-full">
              id {formData.id ? formData.id : id}
            </p>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Назва"
              className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
            />
            <select
              required
              name="group"
              value={formData.group}
              onChange={handleChange}
              className={`border border-pink-200 rounded-lg p-2 pl-5 w-full ${!formData.group ? "text-gray-400" : "text-black"}`}
            >
              <option value="" className="text-gray-400">
                Група
              </option>
              {groups.map((group) => (
                <option
                  key={group}
                  name="group"
                  value={group}
                  className="text-black"
                >
                  {group}
                </option>
              ))}
            </select>
            <select
              required
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`border border-pink-200 rounded-lg p-2 pl-5 w-full ${!formData.category ? "text-gray-400" : "text-black"} `}
            >
              <option value="" className="text-gray-400">
                Категорія
              </option>
              {categories.map((category) => (
                <option
                  key={category}
                  name="category"
                  value={category}
                  className="text-black"
                >
                  {category}
                </option>
              ))}
            </select>
            <input
              required
              min="0"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Ціна"
              className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
            />
            <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-5 w-full">
              <label
                cursor-pointer
                htmlFor="onSale"
                name="onSale"
                value={formData.onSale}
                onChange={handleChange}
                className={formData.onSale ? "text-black" : "text-gray-400"}
              >
                Знижка
              </label>
              <input
                cursor-pointer
                type="checkbox"
                name="onSale"
                checked={formData.onSale}
                onChange={handleChange}
                className="border rounded-lg"
              />
            </div>
            <input
              maxLength="2"
              min="0"
              max="99"
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              placeholder="Знижка %"
              onInput={(e) => {
                e.target.value = e.target.value.slice(0, 2);
              }}
              className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
              disabled={!formData.onSale}
            />
            <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-5 w-full">
              <label
                cursor-pointer
                htmlFor="isNew"
                className={formData.isNew ? "text-black" : "text-gray-400"}
              >
                Новинка
              </label>
              <input
                cursor-pointer
                type="checkbox"
                name="isNew"
                checked={formData.isNew}
                onChange={handleChange}
                className="border rounded-lg"
              />
            </div>
            <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-5 w-full">
              <label
                cursor-pointer
                htmlFor="inStock"
                className={formData.inStock ? "text-black" : "text-gray-400"}
              >
                В наявності
              </label>
              <input
                cursor-pointer
                type="checkbox"
                name="inStock"
                checked={formData.inStock}
                onChange={handleChange}
                className="border rounded-lg"
              />
            </div>
            <div className=" flex flex-col items-center justify-center p-6 border-pink-200 rounded-lg pl-5 w-full border-dashed border-2">
              <label htmlFor="image" className="text-pink-400 mb-5">
                Перетягніть файл сюди або вставте посилання нижче
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="#Зображення"
                className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
              />
            </div>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Опис"
              className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
            ></textarea>
            <textarea
              name="fullDescription"
              value={formData.fullDescription}
              onChange={handleChange}
              placeholder="Повний опис"
              className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
            ></textarea>
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-all active:scale-95"
            >
              Додати товар
            </button>
          </form>
        )}
      </div>
      {view === "manage" && (
        <div className="flex flex-col items-center justify-start mt-5">
          <p className="text-xl font-medium m-1">Останні додані товари:</p>
          <div className="flex flex-row flex-wrap items-center justify-around gap-1 m-1">
            {allProducts
              .slice(-5)
              .reverse()
              .map((product) => (
                <div className="relative p-1 m-1" key={product.id}>
                  <div className="absolute top-6 right-2 flex flex-col items-center justify-center gap-1 w-27">
                    <button
                      className=" border border-blue-500 bg-blue-200 hover:bg-blue-300 hover:border-blue-500 text-black px-4 py-2 rounded-lg transition-all active:scale-95 w-full"
                      onClick={() => handleUpdate(product)}
                    >
                      Редагувати
                    </button>
                    <button
                      className=" border border-red-500 bg-red-200 hover:bg-red-300 hover:border-red-500 text-black px-4 py-2 rounded-lg transition-all active:scale-95 w-full"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Видалити
                    </button>
                  </div>
                  <AdminProductCard
                    product={product}
                    className="border-red-500"
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
