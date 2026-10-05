// Напівпрозорий сірий шар з легким блюром поверх фото / картки
export const OutOfStockOverlay = ({ className = "" }) => (
  <div
    className={`absolute inset-0 z-10 flex items-center justify-center bg-gray-300/60 backdrop-blur-[2px] text-center ${className}`}
  >
    <span className="bg-gray-700/80 text-white text-sm font-bold px-3 py-1 rounded-lg">
      Немає в наявності
    </span>
  </div>
);
