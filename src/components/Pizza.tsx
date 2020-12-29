import React from "react";
import PizzaCSS from "./Pizza.module.css";
import {useStateDispatch} from "./AppState";
import {PizzaProps} from "../types";

const PizzaItem: React.FC<PizzaProps> = ({pizza}) => {
  const dispatch = useStateDispatch();

  const handleAddToCartClick = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item: {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price
        }
      }
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

export default PizzaItem;