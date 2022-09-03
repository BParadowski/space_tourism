import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div css={homeStyle}>
      <h1>SO, YOU WANT TO TRAVEL TO</h1>
      <div className="title">SPACE</div>
      <p>
        Let’s face it: if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <Link to="/destination" css={exploreButtonStyle}>
        EXPLORE
      </Link>
    </div>
  );
}

export default Home;

const homeStyle = css`
  display: grid;
  gap: 1.5rem;
  min-height: 100%;
  text-align: center;
  padding: 2rem;
  justify-items: center;
  margin-top: 10rem;

  h1 {
    font-size: var(--fs-500);
    letter-spacing: var(--ls-large);
    font-family: var(--sans-cond);
  }
  div.title {
    font-size: var(--fs-900);
    font-family: var(--ff-serif);
    line-height: 1.1;
  }

  p {
    font-family: var(--ff-sans-normal);
    letter-spacing: 1.4px;
  }

  @media (min-width: 600px) {
    * {
      max-width: 65%;
    }
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    text-align: start;

    p {
      padding: 1rem;
    }
  }
`;

const exploreButtonStyle = css`
  position: relative;
  background-color: hsl(var(--clr-white));
  color: hsl(var(--clr-dark));
  border-radius: 50%;
  aspect-ratio: 1/1;
  height: 10rem;
  justify-self: center;
  margin-top: 4rem;
  cursor: pointer;
  letter-spacing: var(--ls-small);
  font-size: var(--fs-600);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  @media (min-width: 600px) {
    height: 15rem;
  }

  @media (min-width: 1200px) {
    height: 17rem;
    grid-column: 2/-1;
    grid-row: 1/-1;
    align-self: flex-end;
  }

  &::before {
    position: absolute;
    content: "";
    background-color: hsl(var(--clr-white));
    opacity: 0.12;
    border-radius: 50%;
    aspect-ratio: 1/1;
    height: inherit;
    z-index: -1;
    transition: transform 400ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  }

  &:hover::before {
    transform: scale(1.4);
  }
`;
