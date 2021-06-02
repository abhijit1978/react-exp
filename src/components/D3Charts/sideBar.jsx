import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/charts/column-chart">Column Chart</Link>
        </li>
        <li>
          <Link to="/charts/bar-chart">Bar Chart</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
