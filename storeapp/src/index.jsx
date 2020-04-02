import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';
import './App.css';
import ProductsPage from "./pages/products";
import ViewCartPage from "./pages/view-cart";
import Details from './components/Details';
import Filesupload from './components/Filesupload';

import CartProvider from "./components/cart/context";


ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/view-cart" component={ViewCartPage} />
      <Route exact path="/filesupload" component={Filesupload} />
      <Route exact path="/details" component={Details} />
      </Switch>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();