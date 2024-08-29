import React from "react"
import Home from "../components/MainPage/Home"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home productItems={productItems} CartItem={CartItem} addToCart={addToCart} />
    </>
  )
}

export default Pages
