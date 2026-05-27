import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export const Header = ({ onOpenCatalog }) => {
  const { cart } = useCart();
  return (
    <header className="flex justify-between w-full bg-gray-300 p-5 text-xl font-bold rounded-lg sticky top-0 z-50">
      <div>
        <button
          onClick={onOpenCatalog}
          className=" bg-pink-300 hover:bg-pink-200 border-pink-500  hover:border-pink-600 border p-2 rounded-lg px-4 mr-4"
        >
          ☰
        </button>
        <Link
          to="/"
          className="hover:bg-pink-200 hover:border-pink-600 border bg-pink-300 border-pink-500 p-2 rounded-lg px-4 mr-4"
        >
          Головна
        </Link>
      </div>
      <div className="flex gap-4">
        <Link
          to="/admin"
          className="hover:bg-pink-200 hover:border-pink-600 border bg-pink-300 border-pink-500 p-2 rounded-lg px-4 mr-4"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Кабінет
        </Link>
        <Link
          to="/cart"
          className="relative border bg-blue-300 border-blue-500 p-2 hover:bg-blue-200 hover:border-blue-500 rounded-lg px-4 mr-4 flex items-center justify-center"
        >
          <span className="text-2xl">🛒</span>
          {cart.reduce((total, item) => total + item.quantity, 0) > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-white shadow-sm">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};
