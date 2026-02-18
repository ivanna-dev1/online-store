import React from "react";
import { useCart } from "../context/CartContext";

export const Header = () => {
  const { cart } = useCart();
  return <div className="text-xl font-bold">Cart: {cart?.length} items1</div>;
};
