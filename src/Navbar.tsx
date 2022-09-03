import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/shared/logo.svg";

function Navbar(props: { switchBackground: (pageIndex: number) => void }) {
  const { switchBackground } = props;

  return (
    <header>
      <img src={logo} alt="Space travel logo" />
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => switchBackground(0)}>
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination" onClick={() => switchBackground(1)}>
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew" onClick={() => switchBackground(2)}>
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/technology" onClick={() => switchBackground(3)}>
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
