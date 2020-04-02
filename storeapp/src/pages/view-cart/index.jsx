import React from "react";
import CartProvider from "../../components/cart/context";
import Navbar from "../../components/navbar";

export default function ViewCartPage() {
  return (
    <div>
      <CartProvider>
      <Navbar />
      <h1>View Cart</h1>
      </CartProvider>
    </div>
  );
}