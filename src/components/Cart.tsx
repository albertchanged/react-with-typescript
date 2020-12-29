import React from "react";
import CartCSS from "./Cart.module.css";
import {FiShoppingCart} from "react-icons/fi";

interface Props {

}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Learning how to assert that e.target is an HTMLElement that we expect
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      // Can assert that it's an HTMLSpanElement (e.target as HTMLSpanElement).
    }
    this.setState((prevState) => ({isOpen: !prevState.isOpen}))
  }
  
  render() {
    return (
      <div className={CartCSS.cartContainer}>
        <button
          className={CartCSS.button}
          type="button"
          onClick={this.handleClick}
        >
          <FiShoppingCart />
          <span>2 Pizza(s)</span>
        </button>
        <div
          className={CartCSS.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none"
          }}
        >
          <ul>
            <li>Napoletana</li>
            <li>Marinara</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Cart;