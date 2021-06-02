import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import D3Charts from "./D3Charts";
import HOC from "./HOC";

const Routes = (props) => {
  return (
    <>
      <Switch>
        <Route path="/HOC/:ID?" render={(props) => <HOC {...props} />} />
        <Route path="/Charts" render={(props) => <D3Charts {...props} />} />
        <Route path="/" exact render={(props) => <Home {...props} />} />
      </Switch>
    </>
  );
};

export default Routes;
