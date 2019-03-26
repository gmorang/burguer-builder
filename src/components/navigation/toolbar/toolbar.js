import React from "react";
import "./toolbar.css";
import Logo from "../../logo/logo.js";
import NavigationItems from "../navigation-items/navigation-items";
import DrawerToggle from "../side-drawer/drawer-toggle/drawer-toggle";

class Toolbar extends React.Component {
  render() {
    return (
      <header className="toolbar">
        <DrawerToggle clicked={this.props.drawerToggleClicked} />
        <div className="logo">
          <Logo />
        </div>
        <nav className="desktop-only">
          <NavigationItems />
        </nav>
      </header>
    );
  }
}

export default Toolbar;
