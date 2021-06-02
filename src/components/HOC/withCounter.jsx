import React, { Component } from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends Component {
    state = { count: 0 };

    incrementCouner = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCouner={this.incrementCouner}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
