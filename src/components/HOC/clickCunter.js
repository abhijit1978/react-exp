import React from "react";
import withCounter from "./withCounter";

const ClickCounter = (props) => {
  return (
    <button onClick={props.incrementCouner}>Click count {props.count}</button>
  );
};

export default withCounter(ClickCounter);
