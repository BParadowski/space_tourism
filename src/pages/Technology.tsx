import { css } from "@emotion/react";
import React, { useState } from "react";
import AnimatedPage from "./AnimatedPage";
import { motion, AnimatePresence } from "framer-motion";

interface TechnologyData {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

const backgrounds = {
  page: "technology",
  mobile: "url(images/technology/background-technology-mobile.jpg)",
  tablet: "url(images/technology/background-technology-tablet.jpg)",
  desktop: "url(images/technology/background-technology-desktop.jpg)",
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

function Technology(props: { dataArr: TechnologyData[] }) {
  const { dataArr } = props;
  const [currentTech, setCurrentTech] = useState(0);
  const { name, images, description } = dataArr[currentTech];

  function switchTech(index: number) {
    setCurrentTech(index);
  }

  const techNav = (
    <ul>
      {dataArr.map((tech, index) => (
        <li key={tech.name}>
          <button
            className={currentTech === index ? "active" : ""}
            onClick={() => switchTech(index)}
          >
            {index + 1}
          </button>
        </li>
      ))}
    </ul>
  );
  return (
    <AnimatedPage backgrounds={backgrounds}>
      <div css={styledLayout}>
        <h2>
          <span>03</span> SPACE LAUNCH 101
        </h2>
        <AnimatePresence mode="wait">
          <motion.picture
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "easeOut",
              duration: 0.4,
            }}
            key={`${name}pictureTech`}
          >
            <source media="(min-width: 1200px)" srcSet={images.portrait} />
            <img src={images.landscape} alt="Picture of space equipment" />
          </motion.picture>
        </AnimatePresence>
        {techNav}
        <AnimatePresence mode="wait">
          <motion.div
            className="lower-layout"
            key={`${name}techAndDescription`}
            variants={animationVariants}
            initial="initial"
            animate="animated"
            exit="exiting"
            transition={{
              ease: "easeOut",
            }}
          >
            <p className="subheading2">THE TERMINOLOGY...</p>
            <h3>{name}</h3>
            <p className="description">{description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedPage>
  );
}

export default Technology;

const styledLayout = css`
  overflow: hidden;
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 1.5rem;

  .lower-layout {
    padding: 0 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .subheading2 {
      color: hsl(var(--clr-light));
      font-size: var(--fs-200);
      font-family: var(--ff-sans-cond);
      letter-spacing: var(--ls-medium);
    }

    h3 {
      font-family: var(--ff-serif);
      text-transform: uppercase;
      font-size: var(--fs-600);
      letter-spacing: var(--ls-small);
    }

    .description {
      font-family: var(--ff-sans-normal);
      letter-spacing: var(--ls-tiny);
      font-size: var(--fs-400);
      min-height: 10rem;
    }
  }

  picture,
  img {
    width: 101vw;
    padding: 0;
  }

  ul {
    padding: 0;
    display: flex;
    gap: 1rem;

    li > button {
      width: 2.5rem;
      height: 2.5rem;
      aspect-ratio: 1/1;
      border-radius: 50%;
      color: hsl(var(--clr-white));
      border: hsl(var(--clr-white), 0.5) solid 1px;
      background-color: transparent;
      font-family: var(--ff-serif);
      font-size: var(--fs-400);
      transition: background-color 0s ease-out 0s;
      cursor: pointer;

      &.active,
      &.active:hover {
        border: none;
        background-color: hsl(var(--clr-white));
        color: hsl(var(--clr-dark));
      }

      &:hover {
        border-color: hsl(var(--clr-white));
      }
    }
  }

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

  @media (min-width: 600px) {
    padding-top: 2rem;
    h2 {
      place-self: flex-start;
      padding-left: 2rem;
    }
    .lower-layout {
      padding: 0 2rem 2rem 2rem;

      h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      p {
        max-width: 50ch;
      }
    }
    ul {
      li > button {
        width: 3rem;
        height: 3rem;
      }
    }
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 4fr 3fr;
    grid-template-rows: auto 1fr;
    padding-block: 4rem 1rem;
    padding-inline: clamp(2rem, 7vw, 25rem);
    gap: 2rem;
    text-align: start;

    h2 {
      grid-column: 1/4;
      grid-row: 1/2;
      padding-left: 0;
    }

    .lower-layout {
      max-width: 100%;
      margin-top: 5rem;

      * {
        align-self: flex-start;
      }
    }

    picture {
      width: 100%;
      grid-column: 3/4;
      grid-row: 2/3;
      margin-top: 5rem;
      place-self: center;
      display: flex;
      align-items: center;
      margin: 0;
      max-width: 100%;

      width: clamp(350px, 65vh, 650px);
      aspect-ratio: 1/1;

      img {
        height: inherit;
        width: inherit;
      }
    }

    ul {
      place-self: flex-start;
      margin-top: 5rem;

      flex-direction: column;
      gap: 2rem;

      li > button {
        height: 4rem;
        width: 4rem;
      }
    }
  }
`;
