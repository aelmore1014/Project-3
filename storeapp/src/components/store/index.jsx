import React, { useContext } from "react";
import products from "../../data/products";
import { CartContext } from "../cart/context";
import Cart from "../cart";

export default function Store() {
  const cartCtx = useContext(CartContext)
  return (
    <div>
      {products.map(product => (
        <div>
          <div>
            <img
              src={`/images/${product.sku}.jpg`}
              alt={product.name}
              width={50}
            />
          </div>
          <div>{product.name}</div>
          <div>
            <button onClick={() => cartCtx.addToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      ))}
      {/* USING TO MAKE SURE THE CART IS WORKING/UPDATING; 
      WILL BE COMMENTED OUT WHEN CART IS RENDERING ON CART PAGE */}
       <Cart stripeToken="pk_test_yNFG8EE1RMXpBQmCyWRlGDx400CddyVwyS" />
    </div>
  )
}
