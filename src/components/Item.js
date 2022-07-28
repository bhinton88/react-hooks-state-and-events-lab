import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, addToCart] = useState(false)

  function handleAddingItemsToCart(){
    addToCart(inCart => !inCart)
  }

  const cartStatus = inCart ? "Remove From Cart" : "Add to Cart"
  // const liClassUpdate = inCart ? "in-cart" : ""
  const buttonClassUpdate = inCart ? "remove" : "add"

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddingItemsToCart} className={buttonClassUpdate}>{cartStatus}</button>
    </li>
  );
}

export default Item;
