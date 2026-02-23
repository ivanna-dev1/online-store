import React from "react";

function ProductCard({ product, addToCart, isInCart }) {
  return (
    <div className="border bg-white border-gray-200 rounded-lg p-4 flex flex-col justify-between h-90 max-w-50">
      <img className="h-30" src={product.image} alt={product.name} />
      <section className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <p className="text-gray-600">{product.description}</p>
      </section>
      <button
        onClick={() => addToCart(product)}
        disabled={isInCart}
        className={
          isInCart
            ? "cursor-not-allowed bg-gray-500 text-white px-4 py-2 rounded-lg"
            : "cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg"
        }
      >
        {isInCart ? "In Cart" : "Add"}
      </button>
    </div>
  );
}

export default ProductCard;
