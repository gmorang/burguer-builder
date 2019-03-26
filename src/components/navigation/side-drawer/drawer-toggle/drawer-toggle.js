import React from "react";
import "./drawer-toggle.css";

class DrawerToggle extends React.Component {
  render() {
    return (
      <div className="drawer-toggle" onClick={this.props.clicked}>
        <div />
        <div />
        <div />
      </div>
    );
  }
}

export default DrawerToggle;
