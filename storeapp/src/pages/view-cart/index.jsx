import React from "react";
import CartProvider from "../../components/cart/context";

export default function ViewCartPage() {
  return (
    <div>
      <CartProvider>
      <h1>View Cart</h1>
      </CartProvider>
    </div>
  );
}