import React, { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/navbar";
import About from "./containers/about";
import CV from "./containers/cv/cv";
import Projects from "./containers/projects";

import "./App.scss";

const App: React.FC = () => {
  const cvRef = useRef<HTMLDivElement>(null);
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
      <Navigation title="Farrah Lord-Newcombe" cvRef={cvRef} />
      <Routes>
        <Route path={"/"} element={<About />} />
        <Route
          path="/cv"
          element={<CV windowWidth={windowWidth} cvRef={cvRef} />}
        />
        <Route path={"/projects"} element={<Projects />} />
        <Route element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
