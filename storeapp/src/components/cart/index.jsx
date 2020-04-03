// THIS PAGE HOLDS INFORMATION AND MAPPING FOR THE CART 

import React, { useState, useEffect, useContext } from "react"
import { CartContext } from "./context"
// import images from "../../../public/images"

// SETS FORMAT FOR PRICE
function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`
}

// ADDS UP QUANTITY AND PRICE FOR TOTAL PRICE
function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
}

// EXPORTS CART WITH A STRIPE TOKEN
export default function Cart({ stripeToken }) {
  const [stripe, setStripe] = useState(null)
  const ctx = useContext(CartContext)

  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken))
  }, [stripeToken])

  function checkout() {
    stripe.redirectToCheckout({
      items: ctx.items.map(item => ({
        quantity: item.quantity,
        sku: item.sku
      })),
      successUrl: "https://your-website.com/success",
      cancelUrl: "https://your-website.com/canceled"
    })
  }

// CAN USE THIS AND STORE TO MAP A DETAILS SECTION IF NEEDED
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {ctx.items.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>
                <img
                  src={`/images/${item.sku}.png`}
                  alt={item.name}
                  width={50}
                />
              </td>
              <td>{(item.quantity)}</td>
              <td>{formatPrice(item.price)}</td>
            </tr>
          ))}
          <tr>
            <td style={{ textAlign: "right" }} colSpan={3}>
              Total:
            </td>
            <td>{formatPrice(totalPrice(ctx.items))}</td>
          </tr>

          <tr>
            <td style={{ textAlign: "right" }} colSpan={4}>
              <button onClick={checkout}>Checkout Now!</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
