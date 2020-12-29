import React from "react";
import {PizzaProps} from "../types";
import { useStateDispatch } from "./AppState";
import SpecialOfferCSS from "./SpecialOffer.module.css";

const SpecialOffer: React.FC<PizzaProps> = ({pizza}) => {
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
    <div className={SpecialOfferCSS.container}>
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
    </div>
  )
}

export default SpecialOffer;