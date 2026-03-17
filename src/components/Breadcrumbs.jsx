import { Link } from "react-router-dom"; // Нам потрібні посилання для переходів

export const Breadcrumbs = ({ group, category, productName }) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
      {/* 1. Завжди показуємо посилання на Головну (або Магазин) */}
      <Link to="/" className="hover:text-pink-600 transition-colors">
        Магазин
      </Link>

      {/* 2. Якщо нам передали групу — малюємо її */}
      {group && (
        <>
          <span className="text-gray-400">/</span>
          <span
            className={
              !category
                ? "text-pink-700 font-bold"
                : "hover:text-pink-600 cursor-pointer"
            }
          >
            {group}
          </span>
        </>
      )}

      {/* 3. Якщо передали підкатегорію — малюємо її */}
      {category && (
        <>
          <span className="text-gray-400">/</span>
          <span
            className={
              !productName
                ? "text-pink-700 font-bold"
                : "hover:text-pink-600 cursor-pointer"
            }
          >
            {category}
          </span>
        </>
      )}

      {/* 4. Якщо ми всередині товару — малюємо його назву (це кінець шляху, тому без посилання) */}
      {productName && (
        <>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-bold truncate max-w-[150px]">
            {productName}
          </span>
        </>
      )}
    </nav>
  );
};
