import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import data from "./assets/data.json";
import { Global, css } from "@emotion/react";

function App() {
  const destinationData = data["destinations"];
  const crewData = data["crew"];
  const technologyData = data["technology"];

  return (
    <div>
      <Global styles={globalStyle} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination"
          element={<Destination dataArr={destinationData} />}
        />
        <Route path="/crew" element={<Crew dataArr={crewData} />} />
        <Route
          path="/technology"
          element={<Technology dataArr={technologyData} />}
        />
      </Routes>
    </div>
  );
}

export default App;

const globalStyle = css`
  :root {
    --clr-dark: 230, 35%, 7%;
    --clr-light: 231, 77%, 90%;
    --clr-white: 0, 0%, 100%;
  }

  /* reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  li,
  p,
  picture {
    margin: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  picture,
  img {
    max-width: 100%;
    display: block;
  }

  button {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* utility class for accesibility */

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
