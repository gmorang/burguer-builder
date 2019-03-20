import * as React from "react";
import "./button.css";
class Button extends React.Component {
  render() {
    return (
      <div>
        <button
          className={`button ${this.props.btnType}`}
          onClick={this.props.clicked}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Button;
