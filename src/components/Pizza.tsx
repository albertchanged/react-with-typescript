import React from "react";
import PizzaCSS from "./Pizza.module.css";
import {Pizza} from "../types";
import {withAddToCart, AddToCartProps} from "./AddToCart";

interface Props extends AddToCartProps {
  pizza: Pizza;
}

const PizzaItem: React.FC<Props> = ({pizza, addToCart}) => {
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

export default withAddToCart(PizzaItem);