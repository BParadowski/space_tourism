import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import data from "./assets/data.json";
import { Global, css } from "@emotion/react";

const backgrounds = [
  {
    page: "home",
    mobile: "url(/images/home/background-home-mobile.jpg)",
    tablet: "url(/images/home/background-home-tablet.jpg)",
    desktop: "url(/images/home/background-home-desktop.jpg)",
  },
  {
    page: "destination",
    mobile: "url(/images/destination/background-destination-mobile.jpg)",
    tablet: "url(/images/destination/background-destination-tablet.jpg)",
    desktop: "url(/images/destination/background-destination-desktop.jpg)",
  },
  {
    page: "crew",
    mobile: "url(/images/crew/background-crew-mobile.jpg)",
    tablet: "url(/images/crew/background-crew-tablet.jpg)",
    desktop: "url(/images/crew/background-crew-desktop.jpg)",
  },
  {
    page: "technology",
    mobile: "url(/images/technology/background-technology-mobile.jpg)",
    tablet: "url(/images/technology/background-technology-tablet.jpg)",
    desktop: "url(/images/technology/background-technology-desktop.jpg)",
  },
];

function App() {
  const destinationData = data["destinations"];
  const crewData = data["crew"];
  const technologyData = data["technology"];
  const [currentPage, setCurrentPage] = useState(0);

  function switchPageBackground(pageIndex: number) {
    setCurrentPage(pageIndex);
  }

  return (
    <div
      css={css`
        background-image: ${backgrounds[currentPage].mobile};
        min-height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;

        @media (min-width: 600px) {
          background-image: ${backgrounds[currentPage].tablet};
        }

        @media (min-width: 1200px) {
          background-image: ${backgrounds[currentPage].desktop};
        }
      `}
    >
      <Global styles={globalStyle} />
      <Navbar switchBackground={switchPageBackground} />
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
  @import url("https://fonts.googleapis.com/css2?family=Bellefair&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&display=swap");
  :root {
    --clr-dark: 230, 35%, 7%;
    --clr-light: 231, 77%, 90%;
    --clr-white: 0, 0%, 100%;

    --fs-900: clamp(5rem, 15vw + 1rem, 9.375rem);
    --fs-800: 3.5rem;
    --fs-700: 1.5rem;
    --fs-600: 1rem;
    --fs-500: 1.75rem;
    --fs-400: 0.9375rem;
    --fs-300: 1rem;
    --fs-200: 0.875rem;

    --ff-serif: "Bellefair", serif;
    --ff-sans-cond: "Barlow Condensed", sans-serif;
    --ff-sans-normal: "Barlow", sans-serif;

    --ls-large: 4.75px;
    --ls-medium: 2.7px;
    --ls-small: 2.3px;
    --ls-tiny: 1.4px

    font-size: 18px;
  }

  @media (min-width: 600px) {
    :root {
      --fs-800: 5rem;
      --fs-700: 2.5rem;
      --fs-600: 1.5rem;
      --fs-500: 1.25rem;
      --fs-400: 1rem;
    }
  }

  @media (min-width: 1200px) {
    :root {
      --fs-800: 6.25rem;
      --fs-700: 3.5rem;
      --fs-600: 2rem;
      --fs-500: 1.75rem;
      --fs-400: 1.125rem;
      --fs-300: 1rem;
      --fs-200: 0.875rem;
    }
  }

  #root {
    min-height: 100vh;
    font-family: var(--ff-sans-normal);
    background-color: hsl(var(--clr-dark));
    color: hsl(var(--clr-white));
    font-size: var(--fs-400);
  }

  h1,
  h2,
  h3 {
    text-transform: uppercase;
    font-family: var(--ff-serif);
    font-weight: 400;
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
    font-weight: 400;
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
    line-height: 1.7;
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
