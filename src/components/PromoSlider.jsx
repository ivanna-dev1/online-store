import React from "react";
import { useState } from "react";
import products from "../products";

export const PromoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const promoProducts = products.filter((product) => product.onSale === true);
  console.log(promoProducts);
  const currentProduct = promoProducts[currentIndex];
  return (
    <section
      id="promo-slider"
      className=" bg-white p-4 flex flex-col gap-4 border-b border-white rounded-2xl"
    >
      <h2 className="text-xl font-bold text-pink-900">Гарячі пропозиції</h2>
      <div className="flex flex-row items-center justify-center gap-2 w-full h-full">
        <img src={currentProduct.image} alt={currentProduct.name} />
        <div className="flex flex-col gap-1 w-full h-full">
          <h3 className="text-lg font-semibold">{currentProduct.name}</h3>
          <p className="text-gray-600">
            {currentProduct.price}грн + {currentProduct.discount}%
          </p>
          <p className="text-gray-600">{currentProduct.description}</p>
        </div>
      </div>
    </section>
  );
};
