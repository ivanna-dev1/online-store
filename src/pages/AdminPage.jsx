import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function AdminPage() {
  const { allProducts, addProduct } = useContext(ProductsContext);
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

  return (
    <div>
      <h1 className="text-4xl flex justify-center items-center font-bold text-center text-pink-900 mt-15 mb-5">
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
      <div className="flex flex-col items-center justify-start w-full min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center justify-center lg:w-1/3 w-1/2 shadow-2xl bg-white p-10 rounded-2xl"
        >
          <p className="text-2xl font-bold text-center text-pink-800 m-5">
            Додавання нового товару
          </p>
          <p className="border border-pink-200 rounded-lg p-2 pl-5 w-full">
            id {id}
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
      </div>
    </div>
  );
}
