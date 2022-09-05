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
  mobile: "url(images/destination/background-destination-mobile.jpg)",
  tablet: "url(images/destination/background-destination-tablet.jpg)",
  desktop: "url(images/destination/background-destination-desktop.jpg)",
};

const animationVariants = {
  initial: {
    opacity: 0,
    x: 35,
  },
  animated: {
    opacity: 1,
    x: 0,
  },
  exiting: {
    opacity: 0,
    x: -35,
  },
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
          <li
            key={destination.name}
            className={currentDestination === index ? "active" : ""}
          >
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
        <AnimatePresence mode="wait">
          <motion.picture
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "easeOut",
              duration: 0.6,
            }}
            key={`${name}picture`}
          >
            <source type="image/webp" srcSet={images.webp} />
            <img src={images.png} alt="Picture of your chosen destination" />
          </motion.picture>
        </AnimatePresence>
        {destinationNav}
        <AnimatePresence mode="wait">
          <motion.h3
            key={`${name}name`}
            variants={animationVariants}
            initial="initial"
            animate="animated"
            exit="exiting"
            transition={{
              ease: "easeOut",
            }}
          >
            {name}
          </motion.h3>
          <motion.p
            key={`${name}descr`}
            variants={animationVariants}
            initial="initial"
            animate="animated"
            exit="exiting"
            transition={{
              ease: "easeOut",
            }}
            className="description"
          >
            {description}
          </motion.p>
          <motion.div
            key={`${name}separatingline`}
            variants={animationVariants}
            initial="initial"
            animate="animated"
            exit="exiting"
            transition={{
              ease: "easeOut",
            }}
            className="separating-line"
          ></motion.div>

          <motion.div
            key={`${name}info`}
            variants={animationVariants}
            initial="initial"
            animate="animated"
            exit="exiting"
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
            className="distance-time-info"
          >
            <p className="subheading2">AVG. DISTANCE</p>
            <p className="subheading1">{distance}</p>
            <p className="subheading2">EST. TRAVEL TIME</p>
            <p className="subheading1">{travel}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedPage>
  );
}

export default Destination;

const layoutAndStyling = css`
  overflow: hidden;

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
    min-height: 10rem;
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
    .description {
      min-height: 5rem;
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
    padding-block: 4rem 1rem;
    padding-inline: clamp(2rem, 7vw, 15rem);
    place-items: flex-start;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1.5rem 3rem 115px auto auto auto;
    row-gap: 1rem;

    picture {
      margin-bottom: 2rem;
      margin-top: 4rem;
      margin-left: auto;
      margin-right: clamp(2rem, 7vw + 0.5rem, 6rem);
      grid-row: 2/-1;
      grid-column: 1/2;
      height: clamp(380px, 40vw, 480px);
      img {
        height: inherit;
        width: inherit;
      }
    }

    h2 {
      grid-row: 1/2;
      grid-column: 1/-1;
      font-size: var(--fs-400);
      height: 2rem;
    }
    h3 {
      height: 115px;
    }
    button {
      cursor: pointer;
    }

    nav {
      height: 3rem;
      grid-row: 2/3;
    }

    .description {
      text-align: start;
      width: clamp(12rem, 35vw, 50ch);
    }

    .separating-line {
      margin-top: 0.5rem;
      width: 90%;
    }

    .distance-time-info {
      margin-top: 0;
      .subheading2 {
        margin-bottom: 0;
        place-self: start;
      }

      .subheading1 {
        place-self: start;
      }
    }
  }

  @media (min-height: 1080px) and (min-width: 1400px) {
    margin-top: 10rem;
  }

  @media (min-height: 1200px) and (max-width: 900px) {
    margin-top: 5rem;
  }
`;
