import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
// import _ from "lodash";

import Skills from "./skills";
import { cv_interests, cv_personal_info, screenSizes } from "../constants";

import "../components/styles/sidebar.scss";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { windowWidth, isMobile } = this.props;

    const getPersonalInfo = () => {
      //   let personalInfo = [];
      // _.forEach(cv_personal_info, function (val, key) {
      //     personalInfo.push(
      //         <Row className="pd-20 pb-2">
      //             <Col className="personal_info_key">{key}:</Col>
      //             <Col>{val}</Col>
      //         </Row>
      //     )
      // });
      return (
        <React.Fragment>
          <Row className="pd-20 pb-2">
            <Col md={4} className="personal_info_key">
              Location:
            </Col>
            <Col>{cv_personal_info.Location}</Col>
          </Row>
          <Row className="pd-20 pb-2">
            <Col md={4} className="personal_info_key">
              Github:
            </Col>
            <Col>{cv_personal_info.GitHub}</Col>
          </Row>
          <Row className="pd-20 pb-2">
            <Col md={4} className="personal_info_key">
              LinkedIn:
            </Col>
            <Col>{cv_personal_info.LinkedIn}</Col>
          </Row>
        </React.Fragment>
      );
      //   return personalInfo;
    };

    const content = (
      <React.Fragment>
        {windowWidth >= screenSizes.small && !isMobile && (
          <Row>
            <h3 className="pd-20 pt-15">Farrah Lord-Newcombe</h3>
          </Row>
        )}
        <Row className="section personal_info_section">
          <h4>Personal Information</h4>
          {getPersonalInfo()}
        </Row>
        <Row className="section">
          <h4>Skills</h4>
          <div className="skill_chart">
            <Skills />
          </div>
        </Row>
        <Row className="section">
          <h4>Interests</h4>
          <p className="pd-20">{cv_interests}</p>
        </Row>
      </React.Fragment>
    );

    return windowWidth > 750 && !isMobile ? (
      <Col md={4} sm={3} className="sidebar_container">
        {content}
      </Col>
    ) : (
      content
    );
  }
}

SideBar.propTypes = {
  windowWidth: PropTypes.number,
  isMobile: PropTypes.bool
};

export default SideBar;
