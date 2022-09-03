import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/shared/logo.svg";
import { css } from "@emotion/react";

function Navbar(props: { switchBackground: (pageIndex: number) => void }) {
  const { switchBackground } = props;
  const location = useLocation();

  return (
    <header css={headerStyle}>
      <img src={logo} alt="Space travel logo" />
      <nav>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" onClick={() => switchBackground(0)}>
              <span>00&ensp;</span> Home
            </Link>
          </li>
          <li className={location.pathname === "/destination" ? "active" : ""}>
            <Link to="/destination" onClick={() => switchBackground(1)}>
              <span>01&ensp;</span> Destination
            </Link>
          </li>
          <li className={location.pathname === "/crew" ? "active" : ""}>
            <Link to="/crew" onClick={() => switchBackground(2)}>
              <span>02&ensp;</span> Crew
            </Link>
          </li>
          <li className={location.pathname === "/technology" ? "active" : ""}>
            <Link to="/technology" onClick={() => switchBackground(3)}>
              <span>03&ensp;</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

const headerStyle = css`
  padding-top: 3rem;
  margin-left: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;

  img {
    height: 48px;
    aspect-ratio: 1/1;
    z-index: 1;
    position: relative;

    @media (max-width: 600px) {
      height: 40px;
    }
  }

  nav {
    margin-left: auto;
    backdrop-filter: blur(15px);
    background-color: hsl(var(--clr-white), 0.05);
    position: relative;

    &::before {
      content: "";
      position: absolute;
      height: 0.125rem;
      width: 28vw;
      background-color: hsl(var(--clr-white), 0.1);
      top: 50%;
      right: 97%;
      z-index: 0;
    }

    ul {
      height: 6rem;
      margin: 0;
      display: flex;
      gap: clamp(1rem, 4vw, 6rem);
      align-items: center;
      padding-inline: clamp(0.5rem, 10vw, 10rem);

      li {
        position: relative;

        padding: 0;
        height: 100%;

        &::before {
          content: "";
          position: absolute;
          background-color: hsl(var(--clr-white), 0.5);
          bottom: 0;
          left: 0;
          height: 0.25rem;
          width: 0;
          transition: width 200ms ease-in-out 0s;
          border-radius: 100vh;
        }

        &:hover::before {
          width: 100%;
        }

        &.active::before {
          background-color: hsl(var(--clr-white));
          width: 100%;
        }
      }

      a {
        display: flex;
        align-items: center;
        height: 100%;
        color: hsl(var(--clr-white));
        width: max-content;
        font-family: var(--ff-sans-cond);
        text-transform: uppercase;
        letter-spacing: var(--ls-medium);
        font-size: var(--fs-300);

        span {
          font-weight: 700;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    padding-top: 0;
    margin-left: 2rem;

    nav {
      &::before {
        display: none;
      }

      span {
        display: none;
      }
    }
  }
`;
