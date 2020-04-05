//THIS PAGE CONTAINS FORMATTING FOR THE APPS FOR SALE PAGE

import React from "react";
import Navbar from "../../components/navbar";
import Layout from "../../components/layout";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import ProductsPage from "./pages/products";
import history from "../../history";
import { Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
// import { CartContext } from "../../components/cart/context";
// import { useContext } from 'react';

import items from "../../data/products";

// SETS FORMAT FOR PRICE
function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`
}

export default function ProductsPage() {
  // const cartCtx = useContext(CartContext)
  return (
    <div className={"bg-dark text-white"}>
    <Navbar />
    <Layout title="Available Apps">
    <div>
      {items.map(item => (
        <row gutter={40}>
          <Col 
          xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 4 }}
          lg={{ span: 4 }} xl={{ span: 4 }}
          >
          <div className={"card ml-2 mr-2 mt-4 bg-dark border border-white"} style={{ height: '25rem'}}>
          <div className={"mx-auto"}>
            <img
              className={'img-fluid'}
              src={`/images/${item.sku}.png`}
              alt={item.name}
              style={{ height: '10rem', width: '20rem', }}
            />
          </div>
          <div className={"bg-dark font-weight-bold mx-auto"}>{item.name}</div>
          <div className={"bg-dark"}>{item.description}</div>
          <div className={"bg-dark mx-auto"}>{formatPrice(item.price)}</div>
          <div className={"bg-dark mx-auto"}>
          {/* NOT EXACTLY SURE WHAT TO PUT HERE ONCLICK */}
          <div>
          <button className={"btn btn-outline-info"} onClick={() => history.push('/view-cart')}>
              BUY NOW!
            </button>
          {/* TO TRY TO IMPLEMENT IF WE GET SAVE STATE WORKING BETWEEN PAGES */}
          {/* <button onClick={() => cartCtx.addToCart(item)} onPress={() => history.push("/view-cart")}>
            Add to cart
          </button> */}
          </div>
          </div>
          </div>
          </Col>
        </row>
      ))}
    </div>
    </Layout>
    </div>
  );
}