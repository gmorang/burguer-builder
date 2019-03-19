import * as React from "react";

import Burguer from "../../components/burguer/burguer";
class BurguerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      }
    };
  }
  render() {
    return (
      <div>
        <Burguer ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </div>
    );
  }
}

export default BurguerBuilder;
