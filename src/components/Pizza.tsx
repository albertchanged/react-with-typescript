import React from "react";
import PizzaCSS from "./Pizza.module.css";
import {useStateDispatch} from "./AppState";

// Describe Pizza object
interface Pizza {
  id: number,
  name: string,
  description: string,
  price: number
}

interface Props {
  pizza: Pizza
}

const Pizza: React.FC<Props> = ({pizza}) => {
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

export default Pizza;