import React, { Component } from "react";
import ClickCounter from "./clickCunter";

class HOC extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <>
        <p>HOC component example</p>
        <ClickCounter />
      </>
    );
  }
}

export default HOC;
