import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import data from "./assets/data.json";

function App() {
  const destinationData = data["destinations"];
  const crewData = data["crew"];
  const technology = data["technology"];

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/destination"
            element={<Destination dataArr={destinationData} />}
          />
          <Route path="/crew" element={<Crew dataArr={crewData} />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
