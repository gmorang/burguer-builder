import * as React from "react";

import "./burguer.css";
import BurguerIngredient from "./burguer-ingredients/burguer-ingredients";

class Burguer extends React.Component {
  render() {
    let transformedIngredients = Object.keys(this.props.ingredients)
      .map(igKey => {
        return [...Array(this.props.ingredients[igKey])].map((_, i) => {
          return <BurguerIngredient key={igKey + i} type={igKey} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
    console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
      <div className="burguer">
        <BurguerIngredient type="bread-top" />
        {transformedIngredients}
        <BurguerIngredient type="bread-bottom" />
      </div>
    );
  }
}

export default Burguer;
