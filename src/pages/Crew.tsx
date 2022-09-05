import React, { useState } from "react";
import AnimatedPage from "./AnimatedPage";
import { css } from "@emotion/react";
import { motion, AnimatePresence } from "framer-motion";

interface CrewData {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

const backgrounds = {
  page: "crew",
  mobile: "url(images/crew/background-crew-mobile.jpg)",
  tablet: "url(images/crew/background-crew-tablet.jpg)",
  desktop: "url(images/crew/background-crew-desktop.jpg)",
};

const animationVariants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animated: {
    opacity: 1,
    x: 0,
  },
  exiting: {
    opacity: 0,
    x: -50,
  },
};

function Crew(props: { dataArr: CrewData[] }) {
  const { dataArr } = props;
  const [currentCrewMember, setCurrentCrewMember] = useState(0);
  const { name, images, role, bio } = dataArr[currentCrewMember];

  function switchCrewMember(index: number) {
    setCurrentCrewMember(index);
  }

  const crewNav = (
    <ul>
      {dataArr.map((member, index) => (
        <li key={member.name}>
          <button
            onClick={() => switchCrewMember(index)}
            className={currentCrewMember === index ? "active" : ""}
          ></button>
        </li>
      ))}
    </ul>
  );

  return (
    <AnimatedPage backgrounds={backgrounds}>
      <div css={layoutAndStyling}>
        <h2>
          <span>02</span> MEET YOUR CREW
        </h2>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "easeOut",
              duration: 0.6,
            }}
            key={`${name}picturewow`}
            className="picture-underlined"
          >
            <picture>
              <source type="image/webp" srcSet={images.webp} />
              <img src={images.png} alt="Portrait of a crew member" />
            </picture>
            <div className="separating-line"></div>
          </motion.div>
        </AnimatePresence>
        {crewNav}
        <AnimatePresence mode="wait">
          <motion.div
            variants={animationVariants}
            initial="initial"
            animate="animated"
            exit="exiting"
            transition={{
              ease: "easeOut",
              duration: 0.55,
            }}
            className="name-title"
            key={`${name}nameDesc`}
          >
            <p className="subheading1">{role}</p>
            <h3>{name}</h3>
          </motion.div>
          <motion.p
            variants={animationVariants}
            initial="initial"
            animate="animated"
            exit="exiting"
            transition={{
              ease: "easeOut",
              duration: 0.55,
            }}
            className="description"
            key={`${name}bio`}
          >
            {bio}
          </motion.p>
        </AnimatePresence>
      </div>
    </AnimatedPage>
  );
}

export default Crew;

const layoutAndStyling = css`
  overflow: hidden;
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 1.5rem;
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
      .subheading2 {
        color: hsl(var(--clr-light));
        font-size: var(--fs-200);
        font-family: var(--ff-sans-cond);
        letter-spacing: var(--ls-medium);
      }
    }
  }
  .picture-underlined {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  picture,
  img {
    height: 235px;
  }

  .description {
    font-family: var(--ff-sans-normal);
    letter-spacing: var(--ls-tiny);
    font-size: var(--fs-400);
    min-height: 12rem;
  }

  .separating-line {
    height: 1px;
    background-color: hsl(var(--clr-white), 0.15);
    width: 90vw;
  }

  ul {
    display: flex;
    padding-inline: 0;
    gap: 1rem;
    margin: 0;
    li {
      button {
        height: 12px;
        border-radius: 50%;
        border: none;
        aspect-ratio: 1/1;
        background-color: hsl(var(--clr-white), 0.4);

        &.active,
        &.active:hover {
          background-color: hsl(var(--clr-white));
        }

        &:hover {
          background-color: hsl(var(--clr-white), 0.65);
        }
      }
    }
  }
  .subheading1 {
    font-family: var(--ff-serif);
    text-transform: uppercase;
    font-size: var(--fs-400);
    color: hsl(var(--clr-white), 0.5);
  }

  h3 {
    font-family: var(--ff-serif);
    text-transform: uppercase;
    font-size: var(--fs-600);
    letter-spacing: var(--ls-small);
  }

  @media (min-width: 600px) {
    margin-top: 0rem;
    gap: 1.5rem;
    padding: 2rem;
    padding-bottom: 0;
    picture {
      height: 300px;
    }
    .description {
      min-height: 7rem;
    }
    h2 {
      place-self: start;
    }
    .picture-underlined {
      grid-row: 5/6;
      place-self: flex-end;
      height: auto;
    }
    .subheading1 {
      margin-top: 1.5rem;
      letter-spacing: 1.9px;
    }

    h3 {
      font-size: 2rem;
    }
    picture,
    img {
      margin-top: 1rem;
      height: 570px;
    }

    ul {
      grid-row: 4/5;
    }
  }
  @media (min-width: 1200px) {
    min-height: 100%;
    margin-block: 4rem 0rem;
    padding-inline: clamp(2rem, 7vw, 25rem);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3rem auto 10rem 5rem;
    text-align: start;
    column-gap: clamp(1rem, 3vw + 1rem, 5rem);
    padding-block: 0;
    gap: 1rem;

    .picture-underlined {
      grid-column: 2/3;
      grid-row: 1/-1;
      place-self: flex-end;
      padding-right: clamp(0rem, 7vw, 6rem);

      picture,
      img {
        object-fit: cover;
        height: 100%;
        max-height: 30rem;
        place-self: flex-start;
        margin-top: 0;
      }

      div {
        width: 100%;
      }
    }

    .name-title {
      place-self: flex-start;
      max-width: 50vw;
      min-height: 8rem;
      margin-top: 4rem;
    }

    ul {
      height: 1.6rem;
      place-self: flex-start;
      margin-bottom: 3rem;
      li {
        height: 1rem;
        width: 1rem;

        button {
          cursor: pointer;
          height: 100%;
          padding: 0.4rem;
        }
      }
    }

    .subheading1 {
      margin-top: 2rem;
      font-size: var(--fs-600);
    }

    h3 {
      font-size: var(--fs-700);
      line-height: 1.1;
    }
  }
  @media (min-height: 1080px) and (min-width: 1400px) {
    margin-top: 12rem;
  }

  @media (min-height: 1200px) and (max-width: 900px) {
    margin-top: 5rem;
  }
`;
