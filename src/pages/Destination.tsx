import React, { useState } from "react";
import AnimatedPage from "./AnimatedPage";
import { AnimatePresence, motion } from "framer-motion";
import { css } from "@emotion/react";

export interface DestinationData {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

const backgrounds = {
  page: "destination",
  mobile: "url(/images/destination/background-destination-mobile.jpg)",
  tablet: "url(/images/destination/background-destination-tablet.jpg)",
  desktop: "url(/images/destination/background-destination-desktop.jpg)",
};

function Destination(props: { dataArr: DestinationData[] }): JSX.Element {
  const { dataArr } = props;
  const [currentDestination, setCurrentDestination] = useState(0);
  const { name, images, description, distance, travel } =
    dataArr[currentDestination];

  const destinationNav = (
    <nav>
      <ul>
        {dataArr.map((destination, index) => (
          <li key={destination.name}>
            <button onClick={() => setCurrentDestination(index)}>
              {destination.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <AnimatedPage backgrounds={backgrounds}>
      <div css={layoutAndStyling}>
        <h2>
          <span>01&ensp;</span> PICK YOUR DESTINATION
        </h2>
        <picture>
          <source type="image/webp" srcSet={images.webp} />
          <img src={images.png} alt="Picture of your chosen destination" />
        </picture>
        {destinationNav}
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <div className="separating-line"></div>
        <motion.div className="distance-time-info">
          <p className="subheading2">AVG. DISTANCE</p>
          <p className="subheading1">{distance}</p>
          <p className="subheading2">EST. TRAVEL TIME</p>
          <p className="subheading1">{travel}</p>
        </motion.div>
      </div>
    </AnimatedPage>
  );
}

export default Destination;

const layoutAndStyling = css`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 1rem;
  padding: 0 1rem 1rem 1rem;
  h2 {
    font-size: var(--fs-400);
    font-family: var(--ff-sans-cond);
    letter-spacing: var(--ls-large);
    max-width: 95vw;
    color: hsl(var(--clr-white));

    span {
      opacity: 0.5;
      font-weight: bold;
    }
  }

  picture {
    aspect-ratio: 1/1;
    height: 10.5rem;
  }

  h3 {
    font-size: var(--fs-800);
    font-family: var(--ff-serif);
    line-height: 1.1;
  }

  .description {
    font-family: var(--ff-sans-normal);
    letter-spacing: var(--ls-tiny);
    font-size: var(--fs-400);
  }

  .separating-line {
    height: 1px;
    background-color: hsl(var(--clr-white), 0.15);
    width: 90vw;
  }

  .distance-time-info {
    display: grid;
    text-transform: uppercase;
    .subheading1 {
      font-size: var(--fs-700);
      font-family: var(--ff-serif);
      letter-spacing: var(--ls-medium);

      margin-bottom: 1.5rem;
    }
    .subheading2 {
      color: hsl(var(--clr-light));
      font-size: var(--fs-200);
      font-family: var(--ff-sans-cond);
      letter-spacing: var(--ls-medium);
    }
  }
  nav {
    grid-row: 3/4;
    ul {
      height: 3rem;
      margin: 0;
      display: flex;
      gap: 1rem;
      align-items: center;
      padding-inline: 0.5rem;

      li {
        position: relative;
        padding: 0;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          background-color: transparent;
          border: none;
          color: hsl(var(--clr-light));
          font-family: var(--ff-sans-cond);
          text-transform: uppercase;
          letter-spacing: var(--ls-large);
          padding-inline: 0;
          text-align: end;
        }

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
          width: 95%;
        }

        &.active::before {
          background-color: hsl(var(--clr-white));
          width: 95%;
        }
      }
    }
  }

  @media (min-width: 600px) {
    margin-top: 0rem;
    gap: 1.5rem;
    padding: 2rem;
    picture {
      height: 300px;
    }

    h2 {
      place-self: start;
    }
    picture {
      margin-top: 1rem;
    }
    .distance-time-info {
      margin-top: 0.5rem;
      column-gap: 3rem;
      .subheading2 {
        grid-row: 1/2;
      }

      .subheading1 {
        font-size: var(--fs-600);
      }
    }

    .separating-line {
      margin-top: 1.5rem;
    }
  }

  @media (min-width: 1200px) {
    padding: 4rem 15rem 1rem 15rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(6, auto);

    picture {
      padding: 2rem;
      grid-row: 2/-1;
      grid-column: 1/2;
      place-self: center;
      height: 520px;
    }

    h2 {
      grid-row: 1/2;
      grid-column: 1/-1;
      font-size: var(--fs-400);
    }

    button {
      cursor: pointer;
    }

    .description {
      text-align: start;
    }

    .separating-line {
      width: 90%;
    }
  }
`;
