import React from "react";
import { useState, useEffect } from "react";
import products from "../products";

export const PromoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const promoProducts = products.filter((product) => product.onSale === true);
  console.log(promoProducts);
  useEffect(() => {
    // 1. Створюємо інтервал (годинник)
    const timer = setInterval(() => {
      // 2. Оновлюємо стан на основі попереднього значення (prevIndex)
      setCurrentIndex((prevIndex) =>
        prevIndex === promoProducts.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // Кожні 5 секунд
    // 3. ОЧИЩЕННЯ: "Зупиняємо годинник", коли йдемо зі сторінки
    return () => clearInterval(timer);

    // 4. Масив залежностей: кажемо React перезапускати ефект,
    // якщо кількість товарів у слайдері зміниться
  }, [promoProducts.length]);

  const currentProduct = promoProducts[currentIndex];
  const salePrice = Math.round(
    currentProduct.price * (1 - currentProduct.discount / 100),
  );
  return (
    <section
      id="promo-slider"
      className=" bg-white p-4 flex flex-col justify-between gap-4 border-b border-white rounded-2xl"
    >
      <h2 className="text-xl font-bold text-pink-900">Гарячі пропозиції</h2>
      <div className="flex flex-row items-center justify-between gap-15 w-150 h-full max-h-72 max-w-4xl">
        <img
          src={currentProduct.image}
          alt={currentProduct.name}
          className="max-h-50 w-50"
        />
        <div className="flex flex-col gap-1 w-full h-full">
          <h3 className="text-lg font-semibold">{currentProduct.name}</h3>
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
          <p className="text-gray-600">{currentProduct.description}</p>
          <button className="mt-4 bg-pink-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-pink-700 transition-all shadow-lg active:scale-95 w-fit">
            Купити зараз
          </button>
        </div>
      </div>
    </section>
  );
};
