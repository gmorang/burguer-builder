import React from "react";
import "./layout.css";
import Toolbar from "../navigation/toolbar/toolbar";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <main className="content">{this.props.children}</main>
      </div>
    );
  }
}
export default Layout;
