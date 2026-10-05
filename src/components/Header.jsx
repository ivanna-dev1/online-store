import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { MenuIcon, HomeIcon, UserIcon, CartIcon } from "./Icons";

const buttonClass =
  "flex items-center justify-center border bg-pink-300 border-pink-500 hover:bg-pink-200 hover:border-pink-600 p-2 rounded-lg px-4 text-black";

const NavLabel = ({ icon, children }) => (
  <>
    <span className="md:hidden">{icon}</span>
    <span className="hidden md:inline">{children}</span>
  </>
);

export const Header = ({ onOpenCatalog }) => {
  const { cart } = useCart();
  const totalCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="flex justify-between w-full bg-gray-300 p-5 text-xl font-bold rounded-lg sticky top-0 z-50">
      <div className="flex gap-3">
        <button
          onClick={onOpenCatalog}
          aria-label="Каталог"
          title="Каталог"
          className={buttonClass}
        >
          <NavLabel icon={<MenuIcon />}>Каталог</NavLabel>
        </button>
        <Link to="/" aria-label="Головна" title="Головна" className={buttonClass}>
          <NavLabel icon={<HomeIcon />}>Головна</NavLabel>
        </Link>
      </div>
      <div className="flex gap-3">
        <Link
          to="/admin"
          aria-label="Кабінет"
          title="Кабінет"
          className={buttonClass}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <NavLabel icon={<UserIcon />}>Кабінет</NavLabel>
        </Link>
        <Link
          to="/cart"
          aria-label="Кошик"
          title="Кошик"
          className="relative border bg-blue-300 border-blue-500 p-2 hover:bg-blue-200 rounded-lg px-4 flex items-center justify-center text-black"
        >
          <CartIcon />
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-white shadow-sm">
              {totalCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};
