import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useCart } from "../context/CartContext";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ProductsContext } from "../context/ProductsContext";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { cart, addToCart, incrementQuantity, decrementQuantity } = useCart();
  const { allProducts } = useContext(ProductsContext);
  const product = allProducts.find((item) => item.id === parseInt(id));

  const isInCart = cart.some((item) => item.id === product?.id);
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
      <div className=" flex flex-row justify-between border bg-white border-gray-200 rounded-2xl w-full max-w-221 h-70 p-4 gap-4">
        <img
          className="border flex justify-center items-center border-gray-200 rounded-lg h-70 max-h-full w-1/3 max-w-full object-cover"
          src={
            product.image
              ? product.image
              : "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png"
          }
          alt={product.name}
        />
        <div className="border border-gray-200 rounded-lg flex flex-col justify-around items-center p-2 w-1/3 gap-1">
          <div className="flex flex-col justify-center gap-1">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <div className="flex flex-row justify-start items-center gap-1 w-full">
              {product.onSale ? (
                <div className="flex flex-row justify-start items-start gap-2">
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
                <div className="flex flex-row justify-start gap-3 ">
                  <span className="text-xl font-bold text-pink-700">
                    {product.price} грн
                  </span>
                </div>
              )}
            </div>
            <p className="text-gray-600">{product.description}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-full p-2">
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
        <div className="border border-gray-200 rounded-lg flex flex-col justify-center items-center w-1/3 p-5">
          <p>
            {product.fullDescription.length > 140
              ? product.fullDescription.slice(0, 140) + "..."
              : product.fullDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
