import React, { Component } from "react";

const withCounter = (WrappedComponent, increamentBy) => {
  class WithCounter extends Component {
    state = { count: 0 };

    incrementCouner = () => {
      this.setState((prevState) => {
        return { count: prevState.count + increamentBy };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCouner={this.incrementCouner}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
