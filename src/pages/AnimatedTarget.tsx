import React from "react";
import { motion } from "framer-motion";
import { DestinationData } from "./Destination";

export default function AnimatedTarget(props: DestinationData) {
  const { name, images, description, distance, travel } = props;
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <picture>
        <source type="image/webp" srcSet={images.webp} />
        <img src={images.png} alt="Picture of your chosen destination" />
      </picture>
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="subheading2">AVG. DISTANCE</p>
      <p className="subheading1">{distance}</p>
      <p className="subheading2">EST. TRAVEL TIME</p>
      <p className="subheading1">{travel}</p>
    </motion.div>
  );
}
