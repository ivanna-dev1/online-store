import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <h1 className="text-3xl font-bold text-blue-800 underline">
        {cart.length === 0 ? "Кошик порожній" : "Кошик"}
      </h1>
      <ul className="m-5 flex flex-col gap-6 w-full lg:w-1/2">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border border-gray-300 rounded-md p-5"
          >
            <p className="text-xl text-black">
              • {item.name} - {item.price}грн
            </p>
            <div className="flex flex-row items-center gap-2">
              <div className="flex justify-around gap-2 w-full">
                <button
                  className=" flex items-center bg-pink-100 border border-pink-500 hover:bg-pink-300 hover:border-pink-500 text-black px-4 py-2 rounded-lg w-1/3"
                  onClick={() => incrementQuantity(item.id)}
                >
                  +
                </button>
                <p className="flex items-center text-gray-600 rounded-lg border border-gray-200 text-center px-4 py-2 w-1/3">
                  {cart.find((item) => item.id === item.id)?.quantity || 0}
                </p>
                <button
                  className="flex items-center bg-pink-100 border border-pink-500 hover:bg-pink-300 hover:border-pink-500 text-black px-4 py-2 rounded-lg w-1/3    "
                  onClick={() => decrementQuantity(item.id)}
                >
                  -
                </button>
              </div>

              <button
                className="bg-blue-200 border-2 border-red-500 hover:bg-blue-300 hover:border-red-500 text-black font-bold px-4 py-2 rounded-lg"
                onClick={() => removeFromCart(item.id)}
              >
                Видалити
              </button>
            </div>
          </li>
        ))}
        {cart.length > 0 && (
          <p className="text-lg font-medium text-gray-500 ">
            Кількість товарів: {cart.length} <br /> Загальна сума:{" "}
            {cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
            грн
          </p>
        )}
      </ul>
    </div>
  );
}
