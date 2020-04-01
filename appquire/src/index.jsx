import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductsPage from "./pages/products";
import ViewCartPage from "./pages/view-cart";

import CartProvider from "./components/cart/context";


ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/view-cart" component={ViewCartPage} />
      </Switch>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById("root")
);