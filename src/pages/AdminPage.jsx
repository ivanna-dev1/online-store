import products from "../products";
import { useState } from "react";

export default function AdminPage() {
  const [selectedGroup, setSelectedGroup] = useState("");

  const id = products.length + 1;
  const groups = [...new Set(products.map((product) => product.group))];
  const categories = [
    ...new Set(
      products
        .filter((product) => product.group === selectedGroup)
        .map((product) => product.category),
    ),
  ];

  return (
    <div>
      <h1 className="text-4xl flex justify-center items-center font-bold text-center text-pink-900 m-15">
        Сторінка адміністратора
      </h1>
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        <form className="flex flex-col gap-4 items-center justify-center lg:w-1/3 w-1/2 shadow-2xl bg-white p-10 rounded-2xl">
          <p className="text-2xl font-bold text-center text-pink-800 m-5">
            Додавання нового товару
          </p>
          <p className="border border-pink-200 rounded-lg p-2 pl-5 w-full">
            id {id}
          </p>
          <input
            required
            type="text"
            placeholder="Назва"
            className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
          />
          <select
            required
            className={`border border-pink-200 rounded-lg p-2 pl-5 w-full ${!selectedGroup ? "text-gray-400" : "text-black"}`}
            onChange={(e) => setSelectedGroup(e.target.value)}
          >
            <option value="" className="text-gray-400">
              Група
            </option>
            {groups.map((group) => (
              <option key={group} value={group} className="text-black">
                {group}
              </option>
            ))}
          </select>
          <select
            required
            className="border border-pink-200 rounded-lg p-2 pl-5 w-full text-gray-400  "
          >
            <option value="" className="text-gray-400">
              Категорія
            </option>
            {categories.map((category) => (
              <option key={category} value={category} className="text-black">
                {category}
              </option>
            ))}
          </select>
          <input
            required
            min="0"
            type="number"
            placeholder="Ціна"
            className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
          />
          <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-5 w-full">
            <label
              cursor-pointer
              htmlFor="onSale"
              className="!checked ? text-gray-400 : text-black"
            >
              Знижка
            </label>
            <input
              cursor-pointer
              type="checkbox"
              className="border rounded-lg"
            />
          </div>
          <input
            maxLength="2"
            min="0"
            max="99"
            type="number"
            placeholder="Знижка %"
            onInput={(e) => {
              e.target.value = e.target.value.slice(0, 2);
            }}
            className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
          />
          <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-5 w-full">
            <label cursor-pointer htmlFor="isNew">
              Новинка
            </label>
            <input
              cursor-pointer
              type="checkbox"
              className="border rounded-lg"
            />
          </div>
          <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-5 w-full">
            <label cursor-pointer htmlFor="inStock">
              В наявності
            </label>
            <input
              cursor-pointer
              type="checkbox"
              className="border rounded-lg"
            />
          </div>
          <div className=" flex flex-col items-center justify-center p-6 border-pink-200 rounded-lg pl-5 w-full border-dashed border-2">
            <label htmlFor="image" className="text-pink-400 mb-5">
              Перетягніть файл сюди або вставте посилання нижче
            </label>
            <input
              type="text"
              placeholder="Зображення"
              className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
            />
          </div>
          <textarea
            placeholder="Опис"
            className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
          ></textarea>
          <textarea
            placeholder="Повний опис"
            className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
          ></textarea>
          <button
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
