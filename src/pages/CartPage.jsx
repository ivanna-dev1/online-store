import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900 underline">
        {cart.length === 0 ? "Cart is empty" : "Cart"}
      </h1>
      <ul className="m-5 flex flex-col gap-6">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between border border-gray-300 rounded-md p-2"
          >
            {item.name} - ${item.price}
            <button
              className="bg-red-200 border border-red-500 hover:bg-red-300 hover:border-red-500 text-black px-4 py-2 rounded-lg"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
        <p className="text-2xl font-medium text-blue-900 underline">
          {cart.length === 0
            ? ""
            : `Items in cart- ${cart.length}. Total: $${cart.reduce((total, item) => total + item.price, 0)}`}
        </p>
      </ul>
    </div>
  );
}
