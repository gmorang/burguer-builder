import React from "react";
import "./layout.css";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div>Toolbar, sideDrawer, Backdrop</div>
        <main className="content">{this.props.children}</main>
      </div>
    );
  }
}
export default Layout;
