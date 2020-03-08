import React from "react";
import { indexOf } from "lodash";
// import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const About = () => {
  let history = useHistory();

  const currentPath = indexOf(["/about", "/"], location.pathname) == -1;

  if (currentPath) {
    history.replace("/");
  }

  return <div>About</div>;
};

// About.propTypes = {
//   screenWidth: PropTypes.number
// };

export default About;
