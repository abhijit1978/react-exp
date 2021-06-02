import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const D3ColumnChart = () => {
  useEffect(() => {
    drawChart();
  });

  const drawChart = () => {
    const data = [12, 5, 6, 6, 9, 10];
    const svg = d3
      .select("#colChart1")
      .append("svg")
      .attr("width", 700)
      .attr("height", 300);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 300 - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green");

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 300 - 10 * d - 3);
  };

  return (
    <section>
      <h3>D3 Column Chart</h3>
      <div id="colChart1"></div>
    </section>
  );
};

export default D3ColumnChart;
