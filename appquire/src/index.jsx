import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CartProvider from "./components/cart/context";


ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>,
  document.getElementById("root")
);