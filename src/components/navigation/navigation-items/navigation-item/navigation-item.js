import React from "react";
import "./navigation-item.css";
class NavigationItem extends React.Component {
  render() {
    return (
      <li className="navigation-item">
        <a className={this.props.active ? "active" : null} href="/">
          {this.props.children}
        </a>
      </li>
    );
  }
}
export default NavigationItem;
