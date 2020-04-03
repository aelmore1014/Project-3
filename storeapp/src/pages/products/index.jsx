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
        <div class="card" style={{ width: '20rem' }}>
          <div>
            <img
            class="card-img-top"
              src={`/images/${item.sku}.png`}
              alt={item.name}
              width={50}
            />
          </div>
          <div style={{ fontSize: '30px', textAlign: 'center' }}>{item.name}</div>
          <div style={{ textAlign: 'center' }}>{item.description}</div>
          <div style={{ textAlign: 'center' }} class="text-success">{formatPrice(item.price)}</div>
          <div>
          {/* NOT EXACTLY SURE WHAT TO PUT HERE ONCLICK */}
          <div style={{ textAlign: 'center' }} >
            <button  type="button" class="btn btn-dark" onClick={() => history.push('/view-cart')}>
             Add to Cart
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </Layout>
    </div>
  );
}