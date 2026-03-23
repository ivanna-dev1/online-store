import React from "react";
import { useCart } from "./context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product, isInCart }) {
  const { cart, addToCart, incrementQuantity, decrementQuantity } = useCart();
  return (
    <div className="flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-2 m-2  h-100 min-w-45 max-w-50 shadow-md relative">
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col  justify-start items-start h-fit w-full"
      >
        {product.onSale && (
          <span className="absolute top-2 left-2 font-bold text-pink-600 px-2 py-1 rounded-lg z-10">
            Sale!
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-2 right-2 font-bold text-pink-600 px-2 py-1 rounded-lg z-10">
            New!
          </span>
        )}
        <div className="flex items-center justify-center border border-gray-200 rounded-lg h-1/2 w-fit mx-auto">
          <img
            className="flex flex-row items-center justify-center object-cover text-gray-500  border border-gray-200 rounded-lg h-full w-fit"
            src={
              product.image
                ? product.image
                : "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png"
            }
            alt={product.name}
          />
        </div>
        <div className="flex flex-col items-start w-fit max-h-1/2  gap-1 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold w-full">{product.name}</h3>
          <p className="text-gray-600 w-full">
            {product.onSale ? (
              <div className="flex flex-row justify-start gap-1 ">
                <span className="text-lg text-black">
                  {product.price}грн + {product.discount}%
                </span>
              </div>
            ) : (
              <div className="flex flex-row justify-start gap-1 ">
                <span className="text-lg text-black">{product.price}грн</span>
              </div>
            )}
          </p>
          <p className="text-sm text-gray-600 w-full">
            {product.description.length > 70
              ? product.description.slice(0, 70) + "..."
              : product.description}
          </p>
        </div>
      </Link>
      <div className="flex flex-col justify-center items-center gap-1 h-1/4 w-full p-2 mb-2">
        <button
          onClick={() => addToCart(product.id)}
          disabled={isInCart}
          className={
            isInCart
              ? "cursor-not-allowed bg-gray-500 text-white px-4 py-2 rounded-lg transition-all shadow-lg active:scale-95  w-full"
              : "cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg transition-all shadow-lg active:scale-95 w-full"
          }
        >
          {isInCart ? "В кошику" : "Додати"}
        </button>
        <div className="flex justify-around gap-2 w-full">
          <button
            className=" flex items-center bg-pink-100 border border-pink-500 hover:bg-pink-300 hover:border-pink-500 text-black px-4 py-2 rounded-lg w-1/3"
            onClick={() => incrementQuantity(product.id)}
          >
            +
          </button>
          <p className="flex items-center text-gray-600 rounded-lg border border-gray-200 text-center px-4 py-2 w-1/3">
            {cart.find((item) => item.id === product.id)?.quantity || 0}
          </p>
          <button
            className="flex items-center bg-pink-100 border border-pink-500 hover:bg-pink-300 hover:border-pink-500 text-black px-4 py-2 rounded-lg w-1/3    "
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
