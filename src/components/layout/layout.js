import React from "react";
import "./layout.css";
import Toolbar from "../navigation/toolbar/toolbar";
import SideDrawer from "../navigation/side-drawer/side-drawer";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <SideDrawer />
        <main className="content">{this.props.children}</main>
      </div>
    );
  }
}
export default Layout;
