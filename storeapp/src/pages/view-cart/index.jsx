import React from "react";
import CartProvider from "../../components/cart/context";
// import Cart from "../../components/cart";
import Store from "../../components/store";
import Navbar from "../../components/navbar";
import Layout from "../../components/layout";

export default function ViewCartPage() {
  return (
    <div>
      <CartProvider>
      <Navbar />
      <Layout>
      <Store />
      {/* Use below and delete store if we can get save state working */}
      {/* <Cart stripeToken="pk_test_yNFG8EE1RMXpBQmCyWRlGDx400CddyVwyS"/> */}
      </Layout>
      </CartProvider>
    </div>
  );
}