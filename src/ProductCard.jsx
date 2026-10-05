import React from "react";
import { useCart } from "./context/CartContext";
import { Link } from "react-router-dom";
import { ProductImage } from "./components/ProductImage";
import { Price } from "./components/Price";
import { OutOfStockOverlay } from "./components/OutOfStockOverlay";

function ProductCard({ product, isInCart }) {
  const { cart, addToCart, incrementQuantity, decrementQuantity } = useCart();
  const outOfStock = product.inStock === false;
  return (
    <div className="flex flex-col gap-2 bg-white border border-gray-200 rounded-2xl p-3 w-52 h-104 shadow-md relative">
      {product.onSale && (
        <span className="absolute top-4 left-4 bg-white/90 text-xs font-bold text-pink-600 px-2 py-0.5 rounded-lg z-10">
          Sale!
        </span>
      )}
      {product.isNew && (
        <span className="absolute top-4 right-4 bg-white/90 text-xs font-bold text-pink-600 px-2 py-0.5 rounded-lg z-10">
          New!
        </span>
      )}
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col flex-1 min-h-0 gap-2"
      >
        <div className="relative h-32 w-full shrink-0 flex items-center justify-center overflow-hidden rounded-lg bg-white">
          <ProductImage
            className="max-h-full max-w-full object-contain"
            src={product.image}
            alt={product.name}
          />
          {outOfStock && <OutOfStockOverlay />}
        </div>
        <h3 className="text-base font-semibold leading-5 h-10 line-clamp-2">
          {product.name}
        </h3>
        <Price product={product} />
        <p className="text-sm text-gray-600 leading-4 line-clamp-3 flex-1 min-h-0">
          {product.description}
        </p>
      </Link>
      <div className="flex flex-col gap-2 shrink-0">
        <button
          onClick={() => addToCart(product.id)}
          disabled={isInCart || outOfStock}
          className={`h-10 w-full rounded-lg text-white shadow transition-all active:scale-95 ${
            isInCart || outOfStock
              ? "cursor-not-allowed bg-gray-500"
              : "cursor-pointer bg-blue-500"
          }`}
        >
          {outOfStock ? "Немає в наявності" : isInCart ? "В кошику" : "Додати"}
        </button>
        <div className="grid grid-cols-3 gap-2 w-full">
          <button
            className="h-10 bg-pink-100 border border-pink-500 hover:bg-pink-300 text-black rounded-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-pink-100"
            disabled={outOfStock}
            onClick={() => incrementQuantity(product.id)}
          >
            +
          </button>
          <p className="h-10 flex items-center justify-center text-gray-600 rounded-lg border border-gray-200">
            {cart.find((item) => item.id === product.id)?.quantity || 0}
          </p>
          <button
            className="h-10 bg-pink-100 border border-pink-500 hover:bg-pink-300 text-black rounded-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-pink-100"
            disabled={outOfStock}
            onClick={() => decrementQuantity(product.id)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
