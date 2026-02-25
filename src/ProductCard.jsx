import React from "react";
import { useCart } from "./context/CartContext";

function ProductCard({ product, isInCart }) {
  const { cart, addToCart, incrementQuantity, decrementQuantity } = useCart();
  return (
    <div className="border bg-white border-gray-200 rounded-2xl p-4 flex flex-col justify-between h-100 max-w-50 shadow-md">
      <img className="h-35" src={product.image} alt={product.name} />
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <p className="text-gray-600">{product.description}</p>
      </div>
      <button
        onClick={() => addToCart(product.id)}
        disabled={isInCart}
        className={
          isInCart
            ? "cursor-not-allowed bg-gray-500 text-white px-4 py-2 rounded-lg"
            : "cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg"
        }
      >
        {isInCart ? "In Cart" : "Add"}
      </button>
      <div className="flex justify-around gap-2">
        <button
          className=" flex items-center bg-green-200 border border-green-500 hover:bg-green-300 hover:border-green-500 text-black px-4 py-2 w-10 rounded-lg"
          onClick={() => incrementQuantity(product.id)}
        >
          +
        </button>
        <p className="flex items-center text-gray-600 rounded-lg border border-gray-200 w-15 text-center px-4 py-2">
          {cart.find((item) => item.id === product.id)?.quantity || 0}
        </p>
        <button
          className="flex items-center bg-yellow-200 border border-yellow-500 hover:bg-yellow-300 hover:border-yellow-500 text-black px-4 py-2 w-10 rounded-lg"
          onClick={() => decrementQuantity(product.id)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
