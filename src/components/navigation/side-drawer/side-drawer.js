import React from "react";

import Logo from "../../logo/logo";
import NavigationItems from "../navigation-items/navigation-items";
import "./side-drawer.css";
import Backdrop from "../../UI/backdrop/backdrop";
import Modal from "../../UI/modal/modal";

class SideDrawer extends React.Component {
  render() {
    let attachedClasses = "close";
    if (this.props.open) {
      attachedClasses = "open";
    }
    return (
      <div>
        <Backdrop show={this.props.open} clicked={this.props.closed} />
        <div className={`side-drawer ${attachedClasses}`}>
          <Logo height="11%" />
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
