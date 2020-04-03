//THIS PAGE CONTAINS FORMATTING FOR THE APPS FOR SALE PAGE

import React from "react";
import Navbar from "../../components/navbar";
import Layout from "../../components/layout";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import ProductsPage from "./pages/products";
import history from "../../history";

import items from "../../data/products";

// SETS FORMAT FOR PRICE
function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`
}

export default function ProductsPage() {
  return (
    <div>
    <Navbar />
    <Layout title="Available Apps">
    <div>
      {items.map(item => (
        <div>
          <div>
            <img
              src={`/images/${item.sku}.png`}
              alt={item.name}
              width={50}
            />
          </div>
          <div>{item.name}</div>
          <div>{item.description}</div>
          <div>{formatPrice(item.price)}</div>
          <div>
          {/* NOT EXACTLY SURE WHAT TO PUT HERE ONCLICK */}
            <button onClick={() => history.push('/view-cart')}>
              BUY NOW!
            </button>
          </div>
        </div>
      ))}
    </div>
    </Layout>
    </div>
  );
}