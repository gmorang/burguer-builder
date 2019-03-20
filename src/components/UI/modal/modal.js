import * as React from "react";

import "./modal.css";
import Backdrop from "../backdrop/backdrop";

class Modal extends React.Component {
  render() {
    return (
      <div>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
