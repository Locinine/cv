import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import * as Dream from "../images/dream.jpg";
// import * as mountain from "../images/mountains.png";

import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="parallax" style={{ paddingLeft: 0 }}>
        <Parallax pages={3} style={{ top: "0", left: "0" }}>
          <ParallaxLayer offset={0} speed={0} className="starsContainer">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={-0.1}>
            <div className="mountain_background parallax-layer" />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-0.1}>
            <div className="moon parallax-layer" />
            <div className="title parallax-layer">
              <div className="text-white">
                <h1 className="mb-3">Explore the possibilities</h1>
                <h2 className="mb-3">Creative Development</h2>
                <a
                  className="btn pt-10 mt-5 btn-outline-light btn-lg"
                  href="#!"
                  role="button"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.05}>
            <div className="painter parallax-layer" />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0}>
            <div className="mountain_foreground parallax-layer" />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0}>
            <div className="section-1" />
          </ParallaxLayer>
          <ParallaxLayer style={{ zIndex: "-1" }} offset={2} speed={0}>
            <div className="section-2" />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};

export default Home;
