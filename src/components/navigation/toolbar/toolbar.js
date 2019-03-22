import React from "react";
import "./toolbar.css";
import Logo from "../../logo/logo.js";
import NavigationItems from "../navigation-items/navigation-items";

class Toolbar extends React.Component {
  render() {
    return (
      <header className="toolbar">
        <div>MENU</div>
        <Logo height="80%" />
        <NavigationItems />
      </header>
    );
  }
}

export default Toolbar;
