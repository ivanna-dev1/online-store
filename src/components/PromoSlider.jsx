import React from "react";
import { useState, useEffect } from "react";
import products from "../products";

export const PromoSlider = ({ title, productList }) => {
  if (!productList || productList.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-400">Тут поки порожньо...</p>
      </div>
    );
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    // 1. Створюємо інтервал (годинник)
    const timer = setInterval(() => {
      // 2. Оновлюємо стан на основі попереднього значення (prevIndex)
      setCurrentIndex((prevIndex) =>
        prevIndex === productList.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // Кожні 5 секунд
    // 3. ОЧИЩЕННЯ: "Зупиняємо годинник", коли йдемо зі сторінки
    return () => clearInterval(timer);

    // 4. Масив залежностей: кажемо React перезапускати ефект,
    // якщо кількість товарів у слайдері зміниться
  }, [productList.length]);

  const currentProduct = productList[currentIndex];
  const salePrice = Math.round(
    currentProduct.price * (1 - currentProduct.discount / 100),
  );
  return (
    <section
      id="promo-slider"
      className=" bg-white p-4 flex flex-col  justify-between gap-4 border-b border-white rounded-2xl"
    >
      <h2 className="text-2xl font-bold text-pink-700">{title}</h2>
      <div className="flex flex-row-3 items-center justify-between gap-15 w-full h-full max-h-72 max-w-4xl px-5">
        <img
          src={currentProduct.image}
          alt={currentProduct.name}
          className="max-h-50 w-50"
        />
        <div className="flex flex-col gap-1 w-full h-full max-h-50">
          <h3 className="text-lg font-semibold">{currentProduct.name}</h3>
          {currentProduct.onSale ? (
            <div className="flex items-center gap-3 mt-2">
              <span className="text-2xl font-extrabold text-pink-600">
                {salePrice} грн
              </span>
              <span className="text-gray-400 line-through text-lg">
                {currentProduct.price} грн
              </span>

              <span className="bg-pink-100 text-pink-600 text-xs font-bold px-2 py-1 rounded-full border border-pink-200">
                -{currentProduct.discount}%
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-bold text-pink-700">
                {currentProduct.price} грн
              </span>
            </div>
          )}
          <p className="text-gray-600">{currentProduct.description}</p>
          <button className="mt-4 bg-pink-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-pink-700 transition-all shadow-lg active:scale-95 w-fit">
            Купити зараз
          </button>
        </div>
        <p className="text-gray-600 max-h-50 max-w-1/3">
          {currentProduct.fullDescription}
        </p>
      </div>
    </section>
  );
};
