import React from "react";
import CartProvider from "../../components/cart/context";
// import Cart from "../../components/cart";
import Store from "../../components/store";
import Navbar from "../../components/navbar";
import Layout from "../../components/layout";
import { Router } from "react-router-dom";
import history from "../../history";

export default function ViewCartPage() {
  return (
    <Router history={history}>
    <div>
      <CartProvider>
      <Navbar />
      <Layout title="View Cart">
      <Store />
      {/* Use below and delete store if we can get save state working */}
      {/* <Cart stripeToken="pk_test_yNFG8EE1RMXpBQmCyWRlGDx400CddyVwyS"/> */}
      </Layout>
      </CartProvider>
    </div>
    </Router>
  );
}