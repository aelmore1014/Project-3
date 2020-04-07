import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';
import './App.css';
import './style.css';
import ProductsPage from "./pages/products";
import ViewCartPage from "./pages/view-cart";
import Details from './components/Details';
import Filesupload from './components/Filesupload';
import history from "./history";
import "./assets/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";
// import "./assets/css/paper-kit.min.css";
// import "./assets/css/paper-kit.css.map";
import "./assets/demo/demo.css";
import From from './component/Form'
import Contact from "./pages/contact";


import CartProvider from "./components/cart/context";
import FormPage from "./pages/form";

// Renders paths for pages
ReactDOM.render(
  <Router history={history}>
   {/* wraps other components and gives them access to the router */}
    <CartProvider>
      <Switch>
    {/* exact path keeps pages rendering on separate pages instead of the same page */}
      <Route exact path="/" component={App} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/view-cart" component={ViewCartPage} />
      <Route exact path="/filesupload" component={Filesupload} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/form" component={FormPage} />
        <Route exact path="/contact" component={Contact} />
        
      </Switch>
    </CartProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();