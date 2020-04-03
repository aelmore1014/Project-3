// THIS PAGE HOLDS INFORMATION AND MAPPING FOR THE STORE
// RIGHT NOW THIS IS ONLY BEING SENT FULLY TO THE VIEW-CART 
// PAGE FOR USE

import React, { useContext } from "react";
import items from "../../data/products";
import { CartContext } from "../cart/context";
import Cart from "../cart";

// SETS FORMAT FOR PRICE
function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`
}

// CAN USE THIS AND CART TO MAP A DETAILS SECTION IF NEEDED
export default function Store() {
  const cartCtx = useContext(CartContext)
  return (
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
          <div>{formatPrice(item.price)}</div>
          <div>
            <button onClick={() => cartCtx.addToCart(item)}>
              Add to cart
            </button>
          </div>
        </div>
      ))}
      {/* USING TO MAKE SURE THE CART IS WORKING/UPDATING; 
      WILL BE COMMENTED OUT WHEN CART IS RENDERING ON CART PAGE */}
       <Cart stripeToken="pk_test_UrKGN5qjRXnN7yc9V0nwvBN300CnG4jUMU" />
    </div>
  )
}
