import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedPage from "./AnimatedPage";

interface DestinationData {
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

  function switchDestination(index: number) {
    setCurrentDestination(index);
  }

  const destinationNav = (
    <ul>
      {dataArr.map((destination, index) => (
        <li key={destination.name} onClick={() => switchDestination(index)}>
          {destination.name}
        </li>
      ))}
    </ul>
  );

  return (
    <AnimatedPage backgrounds={backgrounds}>
      <h5>
        <span>01</span> PICK YOUR DESTINATION
      </h5>
      <motion.div>
        <picture>
          <source type="image/webp" srcSet={images.webp} />
          <img src={images.png} alt="Picture of your chosen destination" />
        </picture>
        <nav>{destinationNav}</nav>
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="subheading2">AVG. DISTANCE</p>
        <p className="subheading1">{distance}</p>
        <p className="subheading2">EST. TRAVEL TIME</p>
        <p className="subheading1">{travel}</p>
      </motion.div>
    </AnimatedPage>
  );
}

export default Destination;
