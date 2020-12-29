import React, { useContext } from "react";
import PizzaCSS from "./Pizza.module.css";
import {useSetState} from "./AppState";

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
  const setState = useSetState();

  const handleAddToCartClick = (e) => {
    setState((state) => {
      const itemExists = state.cart.items.find((item) => item.id === pizza.id);

      return {
        ...state,
        cart: {
          ...state.cart,
          items: itemExists
            ? state.cart.items.map((item) => {
                if (item.id === pizza.id) {
                  return {
                    ...item,
                    quantity: item.quantity + 1
                  };
                }

                return item;
              })
            : [
                ...state.cart.items,
                {
                  id: pizza.id,
                  name: pizza.name,
                  price: pizza.price,
                  quantity: 1
                }
              ]
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