import React from "react";
// import ReactDOM from "react-dom";
import { Route, Switch} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CartProvider from "./components/cart/context";
// import ProductsPage from "./pages/products";
// import ViewCartPage from "./pages/view-cart";
import Store from "./components/store"
import Navbar from "./components/navbar"

function App() {
    return (
  <React.Fragment>
    <CartProvider>
      <Navbar />
      <Store />
      {/* <Switch>
        <Route exact path="/products" component={ProductsPage} />
        <Route path="/view-cart" component={ViewCartPage} />
      </Switch> */}
    </CartProvider>
  </React.Fragment>
);
}

export default App;