import React from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "./sideBar";
import D3ColumnChart from "./d3ColumnChart";
import D3BarChart from "./d3BarChart";

const D3Charts = () => {
  return (
    <>
      <h3>This is the D3 Charts Home Page</h3>
      <SideBar />
      <section className="charts-container">
        <Switch>
          <Route path="/charts/column-chart" component={D3ColumnChart} />
          <Route path="/charts/bar-chart" component={D3BarChart} />
        </Switch>
      </section>
    </>
  );
};

export default D3Charts;
