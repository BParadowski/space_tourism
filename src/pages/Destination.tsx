import React from "react";
import AnimatedPage from "./AnimatedPage";
import { useLocation } from "react-router-dom";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import AnimatedTarget from "./AnimatedTarget";
import { AnimatePresence } from "framer-motion";

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
  const location = useLocation();

  const destinationNav = (
    <ul>
      {dataArr.map((destination, index) => (
        <li key={destination.name}>
          <Link to={index === 0 ? "" : destination.name.toLowerCase()}>
            {destination.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  const targets = dataArr.map((targetData, index) => {
    if (index === 0) {
      return (
        <Route
          index
          key={targetData.name}
          element={
            <AnimatedTarget
              name={targetData.name}
              images={targetData.images}
              description={targetData.description}
              distance={targetData.distance}
              travel={targetData.travel}
            />
          }
        />
      );
    } else {
      return (
        <Route
          key={targetData.name}
          path={targetData.name.toLowerCase()}
          element={
            <AnimatedTarget
              name={targetData.name}
              images={targetData.images}
              description={targetData.description}
              distance={targetData.distance}
              travel={targetData.travel}
            />
          }
        />
      );
    }
  });

  return (
    <AnimatedPage backgrounds={backgrounds}>
      <h5>
        <span>01</span> PICK YOUR DESTINATION
      </h5>
      <nav>{destinationNav}</nav>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname.split("/")[2] ?? "basePage"}>
          {targets}
        </Routes>
      </AnimatePresence>
    </AnimatedPage>
  );
}

export default Destination;
