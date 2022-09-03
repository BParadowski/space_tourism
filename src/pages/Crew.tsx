import React, { useState } from "react";

interface CrewData {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

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
          <button onClick={() => switchCrewMember(index)}></button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h5>
        <span>02</span> MEET YOUR CREW
      </h5>
      <picture>
        <source type="image/webp" srcSet={images.webp} />
        <img src={images.png} alt="Portrait of a crew member" />
      </picture>
      <nav>{crewNav}</nav>
      <p className="subheading1">{role}</p>
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
}

export default Crew;
