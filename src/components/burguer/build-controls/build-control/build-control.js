import * as React from "react";

import "./build-control.css";

class BuildControl extends React.Component {
  render() {
    return (
      <div className="build-control">
        <div className="label">{this.props.label}</div>
        <button
          className="less"
          disabled={this.props.disabled}
          onClick={this.props.removed}
        >
          Less
        </button>
        <button className="more" onClick={this.props.added}>
          More
        </button>
      </div>
    );
  }
}

export default BuildControl;
