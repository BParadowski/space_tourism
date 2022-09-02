import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/shared/logo.svg";

function Navbar() {
  return (
    <header>
      <img src={logo} alt="Space travel logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/crew">Crew</Link>
        <Link to="/technology">Technology</Link>
      </nav>
    </header>
  );
}

export default Navbar;
