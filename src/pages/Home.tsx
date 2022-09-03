import React from "react";
import { css } from "@emotion/react";

function Home() {
  return (
    <div css={homeStyle}>
      <h5>SO, YOU WANT TO TRAVEL TO</h5>
      <h1>SPACE</h1>
      <p>
        Let’s face it: if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <button>EXPLORE</button>
    </div>
  );
}

export default Home;

const homeStyle = css`
  display: grid;
  background-image: url("/images/home/background-home-mobile.jpg");
  color: hsl(var(--clr-white));
`;
