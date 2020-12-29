import React from "react";
import {useStateDispatch} from "./AppState";
import {CartItem} from "./AppState";

export interface AddToCartProps {
  addToCart: (item: Omit<CartItem, "quantity">) => void;
}

// Extract props of ChildComponent as OriginalProps
// - Ensure components using withAddToCart will expect AddToCartProps
export function withAddToCart<OriginalProps extends AddToCartProps>(
  ChildComponent: React.ComponentType<OriginalProps>
) {
  // Omit, from the OriginalProps, all props added through dispatch (all in AddToCartProps)
  const AddToCartHOC = (props: Omit<OriginalProps, keyof AddToCartProps>) => {
    const dispatch = useStateDispatch();

    const handleAddToCartClick: AddToCartProps["addToCart"] = (item) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          item: {
            id: item.id,
            name: item.name,
            price: item.price
          }
        }
      });
    }
    
    // https://github.com/microsoft/TypeScript/issues/28884 to learn why we assert props is OriginalProps
    return (
      <ChildComponent {...props as OriginalProps} addToCart={handleAddToCartClick} />
    );
  };

  return AddToCartHOC;
}


// Use WithAddToCartProps to share addToCart functionality

export const WithAddToCartProps: React.FC<{
  children: (props: AddToCartProps) => JSX.Element;
}> = ({children}) => {
  const dispatch = useStateDispatch();

  const addToCart: AddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item: {
          id: item.id,
          name: item.name,
          price: item.price
        }
      }
    });
  }

  return children({addToCart})
}