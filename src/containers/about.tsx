import React from "react";
import { Image } from "react-bootstrap";

// import * as Dream from "../images/dream.jpg";
// import * as mountain from "../images/mountains.png";

import "./about.scss";

const About = () => {
  return (
    <header style={{ paddingLeft: 0 }}>
      {/* <div className="p-5 text-center bg-image background">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Explore the possibilities</h1>
            <h4 className="mb-3">Creative Development</h4>
            <a className="btn btn-outline-light btn-lg" href="#!" role="button">
              Get in touch
            </a>
          </div>
        </div>
      </div> */}

      {/* <div className="parallax">
        <div className="starsContainer parallax-layer">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
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
        <div className="mountainsContainer parallax-layer">
          <div className="mountain1" />
          <div className="mountain2" />
          <div className="mountain2" />
        </div>
        <div className="floor" />
      </div> */}

      <div className="parallax">
        <div className="starsContainer parallax-layer">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        <div className="mountain_background parallax-layer" />
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
        <div className="painter parallax-layer" />
        <div className="mountain_foreground parallax-layer" />
      </div>

      <div className="floor" />
    </header>
  );
};

export default About;
