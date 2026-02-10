import React from "react";

function ProductCard({ product }) {

    return (
        <div className="border border-gray-200 rounded-lg p-4">
            <img className="w-24 h-24" src={product.image} alt={product.name} />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <p className="text-gray-600">{product.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add</button>
        </div>
    );
}

export default ProductCard;