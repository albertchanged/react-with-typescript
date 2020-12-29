import React from "react";
import PizzaCSS from "./Pizza.module.css";
import {Pizza} from "../types";
import {withAddToCart, AddToCartProps, useAddToCart} from "./AddToCart";

// Note: To use Higher Order Component, ensure Props has AddToCartProps properties
interface Props /* extends AddToCartProps */ {
  pizza: Pizza;
}

// PizzaItem uses the Higher Order Component pattern by wrapping itself in
// withAddToCart, which accepts a Child Component (PizzaItem) and adds
// the addToCart method to its original props

// Note: To use Higher Order Component, receive addToCart as a prop
const PizzaItem: React.FC<Props> = ({pizza, /*addToCart*/}) => {
  // Using custom hook for addToCart functionality instead
  const addToCart = useAddToCart();

  const handleAddToCartClick = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price
    });
  }

  return (
    <li className={PizzaCSS.container}>
      <div>
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
      </div>
      <div>
      <button
        type="button"
        onClick={handleAddToCartClick}  
      >
        Add to Cart
      </button>
      </div>
    </li>
  )
}

// Note: To use Higher Order Component, wrap below in withAddToCart
export default PizzaItem;