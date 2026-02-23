import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { cart } = useCart();
  return (
    <header className="flex justify-between bg-gray-300 p-5 text-xl font-bold rounded-lg">
      <Link
        to="/"
        className="hover:bg-pink-200 hover:border-pink-600 border bg-pink-300 border-pink-500 p-2 rounded-lg px-4 mr-4"
      >
        Store
      </Link>
      <Link
        to="/cart"
        className="hover:bg-blue-200 hover:border-blue-500 border bg-blue-300 border-blue-500 p-2 rounded-lg px-4 mr-4"
      >
        Cart: {cart?.length}
      </Link>
    </header>
  );
};
