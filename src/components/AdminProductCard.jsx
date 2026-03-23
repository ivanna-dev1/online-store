import React from "react";
import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";

export const AdminProductCard = ({ product }) => {
  const { deleteProduct } = useContext(ProductsContext);
  return (
    <div className="flex flex-col justify-start text-sm gap-1 shadow-2xl bg-white p-3 rounded-2xl w-50 h-85 m-3">
      <img
        src={
          product.image
            ? product.image
            : "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png"
        }
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
        <p>{product.description && "• " + product.description.slice(0, 50)}</p>
        <p>
          {product.fullDescription.length > 85
            ? "• " + product.fullDescription.slice(0, 85) + "..."
            : "• " + product.fullDescription}
        </p>
      </div>
    </div>
  );
};
