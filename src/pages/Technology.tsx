import React, { useState } from "react";

interface TechnologyData {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

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
        <button key={tech.name} onClick={() => switchTech(index)}>
          {index + 1}
        </button>
      ))}
    </ul>
  );
  return (
    <div>
      <h5>
        <span>03</span> SPACE LAUNCH 101
      </h5>
      <picture>
        <source media="(min-width: 1200px)" srcSet={images.portrait} />
        <img src={images.landscape} alt="Picture of space equipment" />
      </picture>
      <nav>{techNav}</nav>
      <p className="subheader1">THE TERMINOLOGY...</p>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Technology;
