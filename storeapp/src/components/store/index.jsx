// THIS PAGE HOLDS INFORMATION AND MAPPING FOR THE STORE
// RIGHT NOW THIS IS ONLY BEING SENT FULLY TO THE VIEW-CART 
// PAGE FOR USE

import React, { useContext } from "react";
import items from "../../data/products";
import { CartContext } from "../cart/context";
import Cart from "../cart";
import history from "../../history";
import { Col } from 'react-simple-flex-grid';

// SETS FORMAT FOR PRICE
function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`
}

// CAN USE THIS AND CART TO MAP A DETAILS SECTION IF NEEDED
export default function Store() {
  const cartCtx = useContext(CartContext)
  return (
    <row gutter={40} className={"bg-dark text-white"}>
      <div className={"50vw"}>
          <Col 
          xs={{ span: 3 }} sm={{ span: 3 }} md={{ span: 4 }}
          lg={{ span: 6 }} xl={{ span: 6 }}
          >
      {items.map(item => (
        <div className={"bg-dark"}>
          <div className={"bg-dark"}>
            <img
              src={`/images/${item.sku}.png`}
              alt={item.name}
              width={50}
            />
          </div>
          <div className={"bg-dark"}>{item.name}</div>
          <div className={"bg-dark"}>{formatPrice(item.price)}</div>
          <div className={"bg-dark"}>
            <button className={"btn btn-outline-info"} onClick={() => cartCtx.addToCart(item)} onPress={() => history.push("/view-cart")}>
              Add to cart
            </button>
          </div>
          </div>
      ))}
      </Col>
      </div>
      <div className={"float-right 50vw"}>
      <Col 
        xs={{ span: 3 }} sm={{ span: 3 }} md={{ span: 4 }}
        lg={{ span: 6 }} xl={{ span: 6 }}
        >
      {/* USING TO MAKE SURE THE CART IS WORKING/UPDATING; 
      WILL BE COMMENTED OUT WHEN CART IS RENDERING ON CART PAGE */}
      <div>
       <Cart stripeToken="pk_test_UrKGN5qjRXnN7yc9V0nwvBN300CnG4jUMU" />
       </div>
       </Col>
       </div>
    </row>
  )
}
