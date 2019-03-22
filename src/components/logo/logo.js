import React from "react";
import "./logo.css";

import burguerLogo from "../../assets/images/logo.png";
class Logo extends React.Component {
  render() {
    return (
      <div className="logo" style={{ height: this.props.height }}>
        <img src={burguerLogo} alt="MyBurguer" />
      </div>
    );
  }
}
export default Logo;
