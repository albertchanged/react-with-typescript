import React from "react";
import {Pizza} from "../types";
import {withAddToCart, AddToCartProps} from "./AddToCart";
import SpecialOfferCSS from "./SpecialOffer.module.css";

interface Props extends AddToCartProps {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({pizza, addToCart}) => {
  const handleAddToCartClick = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price
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

export default withAddToCart(SpecialOffer);