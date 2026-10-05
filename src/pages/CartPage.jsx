import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ProductImage } from "../components/ProductImage";
import { Price } from "../components/Price";
import { getFinalPrice } from "../utils";

const DELIVERY_METHODS = {
  nova: { label: "Нова пошта (відділення)", price: 60 },
  courier: { label: "Кур'єр за адресою", price: 80 },
  pickup: { label: "Самовивіз з магазину", price: 0 },
};
const PAYMENT_METHODS = {
  cash: "При отриманні",
  card: "Карткою при отриманні",
};
const FREE_DELIVERY_FROM = 800;
const ORDERS_KEY = "online_store_orders";

const inputClass =
  "border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-pink-500";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  delivery: "nova",
  city: "",
  address: "",
  payment: "cash",
  comment: "",
};

const Field = ({ label, children }) => (
  <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
    {label}
    {children}
  </label>
);

const Totals = ({ subtotal, total, deliveryCost }) => (
  <div className="flex flex-col gap-1">
    <p className="flex justify-between text-gray-600">
      <span>Сума без знижок</span>
      <span>{subtotal} грн</span>
    </p>
    {subtotal - total > 0 && (
      <p className="flex justify-between text-pink-600">
        <span>Знижка</span>
        <span>-{subtotal - total} грн</span>
      </p>
    )}
    {deliveryCost !== null && (
      <p className="flex justify-between text-gray-600">
        <span>Доставка</span>
        <span>{deliveryCost === 0 ? "Безкоштовно" : `${deliveryCost} грн`}</span>
      </p>
    )}
    <p className="flex justify-between text-2xl font-extrabold text-gray-900 mt-2">
      <span>До сплати</span>
      <span>{total + (deliveryCost || 0)} грн</span>
    </p>
  </div>
);

export default function CartPage() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } =
    useCart();
  const [step, setStep] = useState("cart");
  const [form, setForm] = useState(emptyForm);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = cart.reduce(
    (sum, item) => sum + getFinalPrice(item) * item.quantity,
    0,
  );
  const deliveryCost =
    total >= FREE_DELIVERY_FROM ? 0 : DELIVERY_METHODS[form.delivery].price;
  const needsAddress = form.delivery !== "pickup";

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: Date.now().toString().slice(-8),
      date: new Date().toLocaleString("uk-UA"),
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: getFinalPrice(item),
      })),
      subtotal,
      total,
      deliveryCost,
      customer: form,
    };
    try {
      const saved = JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]");
      localStorage.setItem(ORDERS_KEY, JSON.stringify([...saved, newOrder]));
    } catch {
    }
    setOrder(newOrder);
    clearCart();
    setForm(emptyForm);
    setStep("done");
  };

  if (step === "done" && order) {
    const { customer } = order;
    return (
      <div className="flex flex-col items-center w-full p-4">
        <h1 className="text-3xl font-bold text-green-700 mt-5">
          Дякуємо за замовлення!
        </h1>
        <p className="text-gray-600 mt-2">
          Ми зв'яжемося з вами за номером {customer.phone}
        </p>
        <section className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl p-5 shadow-sm mt-6">
          <h2 className="text-xl font-bold text-pink-900">
            Чек № {order.id}
          </h2>
          <p className="text-sm text-gray-500 mb-3">{order.date}</p>
          <ul className="divide-y divide-gray-100 text-gray-700">
            {order.items.map((item) => (
              <li key={item.id} className="flex justify-between py-1 gap-2">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>{item.price * item.quantity} грн</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <Totals
              subtotal={order.subtotal}
              total={order.total}
              deliveryCost={order.deliveryCost}
            />
          </div>
          <div className="mt-4 pt-3 border-t border-gray-200 text-sm text-gray-700 flex flex-col gap-1">
            <p>
              <b>Отримувач:</b> {customer.name}, {customer.phone}
            </p>
            <p>
              <b>Доставка:</b> {DELIVERY_METHODS[customer.delivery].label}
            </p>
            {customer.delivery !== "pickup" && (
              <p>
                <b>Адреса:</b> {customer.city}, {customer.address}
              </p>
            )}
            <p>
              <b>Оплата:</b> {PAYMENT_METHODS[customer.payment]}
            </p>
            {customer.comment && (
              <p>
                <b>Коментар:</b> {customer.comment}
              </p>
            )}
          </div>
        </section>
        <Link
          to="/catalog"
          className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-2 rounded-lg"
        >
          Продовжити покупки
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center min-h-screen w-full p-4">
        <h1 className="text-3xl font-bold text-blue-800 underline mt-5">
          Кошик порожній
        </h1>
        <Link
          to="/catalog"
          className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-2 rounded-lg"
        >
          До каталогу
        </Link>
      </div>
    );
  }

  if (step === "checkout") {
    return (
      <div className="flex flex-col items-center w-full p-4">
        <h1 className="text-3xl font-bold text-blue-800 underline mt-5">
          Оформлення замовлення
        </h1>
        <div className="mt-6 w-full max-w-4xl grid gap-4 md:grid-cols-[1fr_20rem] items-start">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col gap-3"
          >
            <h2 className="text-xl font-bold text-pink-900">Контактні дані</h2>
            <Field label="Ім'я та прізвище *">
              <input
                className={inputClass}
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                minLength={2}
                autoComplete="name"
              />
            </Field>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Телефон *">
                <input
                  className={inputClass}
                  type="tel"
                  name="phone"
                  placeholder="+380..."
                  value={form.phone}
                  onChange={handleChange}
                  required
                  pattern="\+?[0-9\s()\-]{10,15}"
                  title="Введіть номер телефону, наприклад +380501234567"
                  autoComplete="tel"
                />
              </Field>
              <Field label="Email">
                <input
                  className={inputClass}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </Field>
            </div>

            <h2 className="text-xl font-bold text-pink-900 mt-2">Доставка</h2>
            <div className="flex flex-col gap-2">
              {Object.entries(DELIVERY_METHODS).map(([key, method]) => (
                <label
                  key={key}
                  className={`flex justify-between gap-2 border rounded-lg p-2 cursor-pointer ${
                    form.delivery === key
                      ? "border-pink-500 bg-pink-50"
                      : "border-gray-300"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="delivery"
                      value={key}
                      checked={form.delivery === key}
                      onChange={handleChange}
                    />
                    {method.label}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {method.price === 0 || total >= FREE_DELIVERY_FROM
                      ? "безкоштовно"
                      : `${method.price} грн`}
                  </span>
                </label>
              ))}
              <p className="text-xs text-gray-500">
                Безкоштовна доставка від {FREE_DELIVERY_FROM} грн
              </p>
            </div>
            {needsAddress && (
              <div className="grid sm:grid-cols-2 gap-3">
                <Field label="Місто *">
                  <input
                    className={inputClass}
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    autoComplete="address-level2"
                  />
                </Field>
                <Field
                  label={
                    form.delivery === "nova"
                      ? "Відділення Нової пошти *"
                      : "Вулиця, будинок, квартира *"
                  }
                >
                  <input
                    className={inputClass}
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    autoComplete="street-address"
                  />
                </Field>
              </div>
            )}

            <h2 className="text-xl font-bold text-pink-900 mt-2">Оплата</h2>
            <select
              className={inputClass}
              name="payment"
              value={form.payment}
              onChange={handleChange}
            >
              {Object.entries(PAYMENT_METHODS).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
            <Field label="Коментар до замовлення">
              <textarea
                className={inputClass}
                name="comment"
                rows={2}
                value={form.comment}
                onChange={handleChange}
              />
            </Field>

            <div className="flex flex-wrap gap-3 mt-2">
              <button
                type="button"
                onClick={() => setStep("cart")}
                className="border border-gray-400 hover:bg-gray-100 px-5 py-2 rounded-lg"
              >
                ← Назад до кошика
              </button>
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-2 rounded-lg flex-1"
              >
                Підтвердити замовлення
              </button>
            </div>
          </form>

          <aside className="bg-white border border-pink-200 rounded-2xl p-5 shadow-sm md:sticky md:top-28">
            <h2 className="text-xl font-bold text-pink-900 mb-3">
              Ваше замовлення
            </h2>
            <ul className="text-sm text-gray-700 divide-y divide-gray-100 mb-3">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between py-1 gap-2">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>{getFinalPrice(item) * item.quantity} грн</span>
                </li>
              ))}
            </ul>
            <Totals
              subtotal={subtotal}
              total={total}
              deliveryCost={deliveryCost}
            />
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen w-full p-4">
      <h1 className="text-3xl font-bold text-blue-800 underline mt-5">Кошик</h1>
      <ul className="m-5 flex flex-col gap-2 w-full lg:w-2/3 max-w-4xl">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex flex-wrap justify-between items-center gap-3 bg-white border border-gray-300 rounded-md p-2"
          >
            <Link
              to={`/product/${item.id}`}
              className="flex items-center gap-3 flex-1 min-w-48"
            >
              <ProductImage
                className="h-16 w-16 rounded-lg object-contain shrink-0"
                src={item.image}
                alt={item.name}
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold">{item.name}</p>
                <Price product={item} />
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <button
                className="bg-pink-100 border border-pink-500 hover:bg-pink-300 px-3 py-1 rounded-lg"
                onClick={() => decrementQuantity(item.id)}
              >
                -
              </button>
              <p className="w-8 text-center text-gray-600">{item.quantity}</p>
              <button
                className="bg-pink-100 border border-pink-500 hover:bg-pink-300 px-3 py-1 rounded-lg"
                onClick={() => incrementQuantity(item.id)}
              >
                +
              </button>
            </div>
            <p className="w-24 text-right font-bold">
              {getFinalPrice(item) * item.quantity} грн
            </p>
            <button
              className="bg-blue-200 border-2 border-red-500 hover:bg-blue-300 font-bold px-3 py-1 rounded-lg"
              onClick={() => removeFromCart(item.id)}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>

      <section className="w-full lg:w-2/3 max-w-4xl bg-white border border-pink-200 rounded-2xl p-5 shadow-sm">
        <p className="flex justify-between text-gray-600 mb-1">
          <span>Кількість товарів</span>
          <span>{totalCount}</span>
        </p>
        <Totals subtotal={subtotal} total={total} deliveryCost={null} />
        <button
          onClick={() => setStep("checkout")}
          className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg py-3 rounded-xl transition-colors"
        >
          Оформити замовлення
        </button>
      </section>
    </div>
  );
}
