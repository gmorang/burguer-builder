import React from "react";

import Logo from "../../logo/logo";
import NavigationItems from "../navigation-items/navigation-items";
import "./side-drawer.css";

class SideDrawer extends React.Component {
  render() {
    return (
      <div className="side-drawer">
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    );
  }
}

export default SideDrawer;
