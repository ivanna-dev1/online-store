import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div
      id="login-page"
      className="flex flex-col items-center justify-start p-10 bg-white rounded-3xl shadow-sm m-4 border border-pink-100 h-screen"
    >
      <h1 className="text-3xl font-bold text-pink-900 mb-8">Вхід в систему</h1>
      <p className="text-gray-600 text-lg mt-8 mb-4 max-w-2xl text-center leading-relaxed font-medium">
        Виберіть свою роль для продовження:
      </p>
      <div className="flex gap-4">
        <Link
          to="/cart"
          className="bg-pink-50 hover:bg-pink-100 border-pink-500 hover:border-pink-600 border p-2 rounded-lg px-4 mr-4 font-medium"
        >
          Я покупець
        </Link>
        <Link
          to="/admin"
          className="bg-blue-50 hover:bg-blue-100 border-blue-500 hover:border-blue-600 border p-2 rounded-lg px-4 mr-4 font-medium"
        >
          Я адмін
        </Link>
      </div>
    </div>
  );
}
