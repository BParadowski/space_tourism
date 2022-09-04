import React from "react";
import { motion } from "framer-motion";
import { css } from "@emotion/react";

interface Backgrounds {
  page: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

type Props = {
  backgrounds: Backgrounds;
  children: JSX.Element | JSX.Element[];
};

function AnimatedPage({ backgrounds, children }: Props) {
  const { mobile, tablet, desktop } = backgrounds;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      exit={{ opacity: 0 }}
      css={css`
        background-image: ${mobile};
        min-height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;

        @media (min-width: 600px) {
          background-image: ${tablet};
        }

        @media (min-width: 1200px) {
          background-image: ${desktop};
        }
      `}
    >
      <div
        css={css`
          // to separate header with position: fixed
          height: 6rem;
        `}
      ></div>
      {children}
    </motion.div>
  );
}

export default AnimatedPage;
