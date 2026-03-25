import React from "react";
import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";

export const AdminProductCard = ({ product }) => {
  const { deleteProduct } = useContext(ProductsContext);
  return (
    <div className="flex flex-col justify-start text-xs gap-1 shadow-2xl bg-white p-3 rounded-2xl w-45 h-65 m-3">
      <img
        src={product.image ? product.image : "./img/mainimg.png"}
        alt={product.name}
        className="w-fit h-1/4 object-cover"
      />
      <div>
        <p className="text-md font-medium">{product.name}</p>

        <div className="flex flex-row flex-wrap justify-start">
          <p>• {product.group}</p>
          <p>({product.category})</p>
        </div>
        <div className="flex flex-row flex-wrap justify-start">
          <p>• {product.price}грн</p>
          <p>{product.onSale ? "- Акція" : "- Акція - Ні"}</p>
          <p>{product.discount ? `- ${product.discount}%` : ""}</p>
        </div>
        <p>{product.isNew ? "• Новинка - Так" : "• Новинка - Ні"}</p>
        <p>{product.inStock ? "• В наявності - Так" : "• В наявності - Ні"}</p>
        <p className="text-xs">
          {product.description ? "• " + product.description : "• Опис - Ні"}
        </p>
        <p className="text-xs">
          {product.fullDescription
            ? product.fullDescription.length > 65
              ? "• " + product.fullDescription.slice(0, 65) + "..."
              : "• " + product.fullDescription
            : "• Повний опис - Ні"}
        </p>
      </div>
    </div>
  );
};
