import { getFinalPrice } from "../utils";

export const Price = ({ product, size = "md" }) => {
  const hasDiscount = product.onSale && product.discount > 0;
  const mainSize = size === "lg" ? "text-2xl" : "text-base";

  if (!hasDiscount) {
    return (
      <span className={`${mainSize} font-bold text-gray-900`}>
        {product.price} грн
      </span>
    );
  }

  return (
    <div className="flex flex-nowrap items-baseline gap-x-2 whitespace-nowrap">
      <span className={`${mainSize} font-extrabold text-pink-600`}>
        {getFinalPrice(product)} грн
      </span>
      <span className="text-gray-400 line-through text-xs">
        {product.price} грн
      </span>
      <span className="bg-pink-100 text-pink-600 text-[11px] font-bold px-1.5 py-0.5 rounded-full border border-pink-200">
        -{product.discount}%
      </span>
    </div>
  );
};
