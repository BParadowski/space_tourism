import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/shared/logo.svg";
import hamburger from "./assets/shared/icon-hamburger.svg";
import closeHamburger from "./assets/shared/icon-close.svg";
import { css } from "@emotion/react";

function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuOpen((state) => !state);
  }

  return (
    <header css={headerStyle}>
      <img src={logo} alt="Space travel logo" />
      <button
        className={mobileMenuOpen ? "open" : ""}
        onClick={() => toggleMobileMenu()}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav className={mobileMenuOpen ? "open" : ""}>
        <ul>
          <li className={/\/$/.test(location.pathname) ? "active" : ""}>
            <Link to="/">
              <span>00&ensp;</span> Home
            </Link>
          </li>
          <li
            className={/\/destination/.test(location.pathname) ? "active" : ""}
          >
            <Link to="/destination">
              <span>01&ensp;</span> Destination
            </Link>
          </li>
          <li className={/\/crew/.test(location.pathname) ? "active" : ""}>
            <Link to="/crew">
              <span>02&ensp;</span> Crew
            </Link>
          </li>
          <li
            className={/\/technology/.test(location.pathname) ? "active" : ""}
          >
            <Link to="/technology">
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
  position: fixed;
  z-index: 20;
  width: 100%;
  padding-top: 3rem;
  margin-left: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;

  button {
    display: none;
  }

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
      width: 30vw;
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
  @media (max-width: 1400px) {
    nav {
      &::before {
        width: 24vw;
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

      ul {
        padding-inline: clamp(0.5rem, 8vw, 5rem);
      }

      span {
        display: none;
      }
    }
  }

  @media (max-width: 600px) {
    button {
      display: block;
      border: none;
      background-color: transparent;
      margin-right: 3rem;
      z-index: 100;
      background-image: url(${hamburger});
      aspect-ratio: 1/1;
      height: 1.3rem;
      background-repeat: no-repeat;
      background-size: cover;

      &.open {
        background-image: url(${closeHamburger});
      }
    }

    nav {
      visibility: hidden;
      backdrop-filter: blur(20px);
      position: fixed;
      inset: 0 0 0 30%;
      z-index: 2;

      &.open {
        visibility: visible;
      }

      ul {
        margin-top: 7rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;

        span {
          display: inline;
        }
      }
    }
  }
`;
