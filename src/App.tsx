import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/navbar";
import About from "./containers/about";
import CV from "./containers/cv/cv";
import Projects from "./containers/projects";

import "./App.scss";

const App: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    // setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main_container">
      <Navigation title="Farrah Lord-Newcombe" />
      <Routes>
        <Route path={"/"} element={<About />} />
        <Route path="/cv" element={<CV windowWidth={windowWidth} />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
