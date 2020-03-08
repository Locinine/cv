import React, { Component } from "react";
import PropTypes from "prop-types";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Projects</div>;
  }
}

Projects.propTypes = {
  screenWidth: PropTypes.number
};

export default Projects;
