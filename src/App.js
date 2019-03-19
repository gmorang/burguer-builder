import React, { Component } from "react";

import Layout from "./components/layout/layout";
import BurguerBuilder from "./containers/burguer-builder/burguer-builder";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurguerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
