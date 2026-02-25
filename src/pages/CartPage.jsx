import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900 underline">
        {cart.length === 0 ? "Cart is empty" : "Cart"}
      </h1>
      <ul className="m-5 flex flex-col gap-6">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border border-gray-300 rounded-md p-5"
          >
            • {item.name} - ${item.price}
            <div className="flex flex-row items-center gap-2">
              <button
                className="flex items-center bg-green-200 border border-green-500 hover:bg-green-300 hover:border-green-500 text-black px-4 py-2 w-10 rounded-lg"
                onClick={() => incrementQuantity(item.id)}
              >
                +
              </button>
              <p className="flex items-center text-gray-600 rounded-lg border border-gray-200 w-15 text-center px-4 py-2">
                {item.quantity}
              </p>
              <button
                className="flex items-center bg-yellow-200 border border-yellow-500 hover:bg-yellow-300 hover:border-yellow-500 text-black px-4 py-2 w-10 rounded-lg"
                onClick={() => decrementQuantity(item.id)}
              >
                -
              </button>

              <button
                className="bg-red-200 border border-red-500 hover:bg-red-300 hover:border-red-500 text-black px-4 py-2 rounded-lg"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
        {cart.length > 0 && (
          <p className="text-2xl font-medium text-blue-900 underline">
            Items in cart- {cart.length}. Total: ${""}
            {cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
        )}
      </ul>
    </div>
  );
}
