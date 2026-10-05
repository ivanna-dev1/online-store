import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useCart } from "../context/CartContext";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ProductsContext } from "../context/ProductsContext";
import { Price } from "../components/Price";
import { OutOfStockOverlay } from "../components/OutOfStockOverlay";
import { ProductImage } from "../components/ProductImage";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { cart, addToCart, incrementQuantity, decrementQuantity } = useCart();
  const { allProducts } = useContext(ProductsContext);
  const product = allProducts.find((item) => item.id === parseInt(id));

  const isInCart = cart.some((item) => item.id === product?.id);
  const outOfStock = product?.inStock === false;
  if (!product) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-10 p-5">Product not found 🔍</h1>
      </div>
    );
  }

  return (
    <div className="rounded-2xl flex flex-col items-center h-full w-full  mx-auto p-10">
      <Breadcrumbs
        group={product.group}
        category={product.category}
        productName={product.name}
        className="m-5 p-5"
      />

      {/* <h1 className="text-2xl font-bold "></h1> */}
      <div className=" flex sm:flex-row flex-col justify-between border bg-white border-gray-200 rounded-2xl w-full max-w-221 h-fit p-4 gap-4 sm:items-stretch">
        <div className="relative sm:w-1/3 w-full h-64 sm:h-auto min-h-64 border border-gray-200 rounded-lg overflow-hidden">
          <ProductImage
            className="h-full w-full object-cover"
            src={product.image}
            alt={product.name}
          />
          {outOfStock && <OutOfStockOverlay />}
        </div>
        <div className="border border-gray-200 rounded-lg flex flex-col justify-around items-center p-2 sm:w-1/3 w-full gap-1">
          <div className="flex flex-col justify-center gap-1">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <Price product={product} size="lg" />
            <p className="text-gray-600">{product.description}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-full p-2">
            <button
              onClick={() => addToCart(product.id)}
              disabled={isInCart || outOfStock}
              className={
                isInCart || outOfStock
                  ? "cursor-not-allowed bg-gray-500 text-white px-4 py-2 rounded-lg transition-all shadow-lg active:scale-95  w-full"
                  : "cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg transition-all shadow-lg active:scale-95 w-full"
              }
            >
              {outOfStock ? "Немає в наявності" : isInCart ? "В кошику" : "Додати"}
            </button>
            <div className="flex sm:justify-around justify-center sm:gap-2 gap-1 w-full">
              <button
                className=" flex items-center bg-pink-100 border border-pink-500 hover:bg-pink-300 hover:border-pink-500 text-black px-4 py-2 rounded-lg w-1/3 disabled:opacity-40 disabled:cursor-not-allowed"
                disabled={outOfStock}
                onClick={() => incrementQuantity(product.id)}
              >
                +
              </button>
              <p className="flex items-center text-gray-600 rounded-lg border border-gray-200 text-center px-4 py-2 w-1/3">
                {cart.find((item) => item.id === product.id)?.quantity || 0}
              </p>
              <button
                className="flex items-center bg-pink-100 border border-pink-500 hover:bg-pink-300 hover:border-pink-500 text-black px-4 py-2 rounded-lg w-1/3 disabled:opacity-40 disabled:cursor-not-allowed"
                disabled={outOfStock}
                onClick={() => decrementQuantity(product.id)}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg flex flex-col justify-center items-center sm:w-1/3 w-full p-2">
          <p className="whitespace-pre-line text-sm text-gray-700">
            {product.fullDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
