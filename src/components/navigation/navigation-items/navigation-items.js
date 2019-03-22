import React from "react";

import "./navigation-items.css";
import NavigationItem from "./navigation-item/navigation-item";

class NavigationItems extends React.Component {
  render() {
    return (
      <ul className="navigation-items">
        <NavigationItem link="/" active>
          Burguer Builder
        </NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
      </ul>
    );
  }
}

export default NavigationItems;
