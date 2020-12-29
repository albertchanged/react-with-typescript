import React from "react";
import {Pizza} from "../types";
import {WithAddToCartProps} from "./AddToCart";
import SpecialOfferCSS from "./SpecialOffer.module.css";

interface Props {
  pizza: Pizza;
}

// SpecialOffer uses the Render Props pattern by wrapping the button
// in WithAddToCartProps, which passes addToCart method as a prop to button
// and renders this wrapped button using a function

const SpecialOffer: React.FC<Props> = ({pizza}) => {
  return (
    <div className={SpecialOfferCSS.container}>
      <div>
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
      </div>
      <div>
        <WithAddToCartProps>
          {({addToCart}) => {
            return (
              <button
                type="button"
                onClick={() => addToCart({
                  id: pizza.id,
                  name: pizza.name,
                  price: pizza.price
                })}
              >
                Add to Cart
              </button>
            );
          }}
        </WithAddToCartProps>
      </div>
    </div>
  )
}

export default SpecialOffer;