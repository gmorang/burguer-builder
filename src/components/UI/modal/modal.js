import * as React from "react";

import "./modal.css";

class Modal extends React.Component {
  render() {
    return (
      <div
        className="modal"
        style={{
          transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: this.props.show ? "1" : "0"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
