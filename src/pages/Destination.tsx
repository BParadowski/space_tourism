import React, { useState } from "react";

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
    <div>
      <h5>
        <span>01</span> PICK YOUR DESTINATION
      </h5>
      <picture>
        <source type="image/webp" srcSet={images.webp} />
        <img src={images.png} alt="Picture of your chosen destination" />
      </picture>
      <nav>{destinationNav}</nav>
      <h2>{name}</h2>
      <p>{description}</p>
      <h5>AVG. DISTANCE</h5>
      <p className="subheading1">{distance}</p>
      <h5>EST. TRAVEL TIME</h5>
      <p className="subheading2">{travel}</p>
    </div>
  );
}

export default Destination;
