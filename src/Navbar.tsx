import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/shared/logo.svg";

function Navbar() {
  return (
    <header>
      <img src={logo} alt="Space travel logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew">
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/technology">
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
