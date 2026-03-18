import React from "react";
import { useState, useEffect } from "react";
import products from "../products";
import { useCart } from "../context/CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const PromoSlider = ({ title, productList }) => {
  if (!productList || productList.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-400">Тут поки порожньо...</p>
      </div>
    );
  }
  const { addToCart } = useCart();

  return (
    <section
      id="promo-slider"
      className=" bg-white p-4 flex flex-col  justify-between gap-4 border-b border-white rounded-2xl"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full max-w-221 h-66 px-3 pt-2"
      >
        {productList.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-row items-center justify-between gap-5 w-full h-full max-h-72 max-w-4xl px-5">
              <img
                src={product.image}
                alt={product.name}
                className="flex justify-end items-center max-h-60 max-w-1/3"
              />
              <div className="flex flex-col justify-center items-center gap-2 w-1/3 h-full max-h-60">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                {product.onSale ? (
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-2xl font-extrabold text-pink-600">
                      {Math.round(product.price * (1 - product.discount / 100))}
                      грн
                    </span>
                    <span className="text-gray-400 line-through text-lg">
                      {product.price} грн
                    </span>

                    <span className="bg-pink-100 text-pink-600 text-xs font-bold px-2 py-1 rounded-full border border-pink-200">
                      -{product.discount}%
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xl font-bold text-pink-700">
                      {product.price} грн
                    </span>
                  </div>
                )}
                <p className="text-gray-600">{product.description}</p>
                <button
                  onClick={() => addToCart(product.id)}
                  className="mt-4 bg-pink-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-pink-700 transition-all shadow-lg active:scale-95 w-fit"
                >
                  Купити зараз
                </button>
              </div>
              <p className="flex justify-start items-center text-gray-600 max-h-60 max-w-1/3 ">
                {product.fullDescription}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
