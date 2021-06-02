import React from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className="app-header">
      Header
      <nav>
        <Link to="/">Home</Link>
        <Link to="/charts">Charts</Link>
        <Link to="/HOC">HOC</Link>
      </nav>
    </header>
  );
};

export default AppHeader;
