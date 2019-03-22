import React from "react";
import "./toolbar.css";
import Logo from "../../logo/logo.js";

class Toolbar extends React.Component {
  render() {
    return (
      <header className="toolbar">
        <div>MENU</div>
        <Logo />
        <nav>...</nav>
      </header>
    );
  }
}

export default Toolbar;
