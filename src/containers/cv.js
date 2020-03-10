import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Col, Row, Button } from "react-bootstrap";
import _ from "lodash";

import SideBar from "../components/sidebar";
import {
  cv_intro,
  cv_expierence,
  cv_education,
  screenSizes
} from "../constants";

import "../containers/styles/cv.scss";

class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    _.bindAll(this, ["exportPDF"]);
  }

  exportPDF() {
    // this.resume.save();
  }

  render() {
    const getAchievementDetails = details => {
      let detail_list = [];
      _.forEach(details, function(detail) {
        detail_list.push(<li>{detail}</li>);
      });
      return detail_list;
    };

    const getAchievements = achievement => {
      let achievement_list = [];
      _.forEach(achievement, function(item) {
        if (typeof item == "string") {
          achievement_list.push(<li className="achievement_bullet">{item}</li>);
        } else if (typeof item == "object") {
          const key = Object.keys(item);
          achievement_list.push(<li>{key[0]}</li>);
          achievement_list.push(<ul>{getAchievementDetails(item[key])}</ul>);
        }
      });
      return achievement_list;
    };

    const Expierence = () => {
      let expierences = [];
      _.forEach(cv_expierence, function(job) {
        expierences.push(
          <Row className="pd-5">
            <Col md={3}>{job.dates}</Col>
            <Col md={9}>
              <Row>
                <Col className="p-0 job_role">
                  <h6>{job.role}</h6>
                </Col>
                <Col className="company_name">{job.company_name}</Col>
              </Row>
              <Row>{job.desc}</Row>
              <Row>
                <div className="achieve_resp">
                  Achievements and responsibilities:
                </div>
              </Row>
              <Row>
                <ul>{getAchievements(job.achievements_response)}</ul>
              </Row>
            </Col>
          </Row>
        );
      });
      return expierences;
    };

    const getQualifications = qualification => {
      let qualification_list = [];
      _.forEach(qualification, function(item) {
        qualification_list.push(<li>{item}</li>);
      });
      return qualification_list;
    };

    const Education = () => {
      let education_list = [];
      _.forEach(cv_education, function(item) {
        education_list.push(
          <Row className="pd-5">
            <Col md={3}>{item.dates}</Col>
            <Col md={9}>
              <Row>
                <h6>{item.org_name}</h6>
              </Row>
              <Row>
                <ul>{getQualifications(item.desc)}</ul>
              </Row>
            </Col>
          </Row>
        );
      });
      return education_list;
    };

    const mainSections = (
      <React.Fragment>
        <Row className="pd-20 pt-15 pb-2">{cv_intro}</Row>
        <Row className="pd-20">
          <h4 className="section-border">Experience</h4>
        </Row>
        {Expierence()}
        <Row className="pd-20">
          <h4 className="section-border">Education</h4>
        </Row>
        {Education()}
      </React.Fragment>
    );

    const { windowWidth, isMobile } = this.props;

    return (
      <React.Fragment>
        <div className="button_container container">
          <span>
            windowWidth: {windowWidth}
            <br />
          </span>
          <span>
            isMobile: {isMobile.toString()}
            <br />
          </span>
          <span>device: {window.navigator.platform}</span>
          <Button
            className="exportButton"
            variant="danger"
            onClick={this.exportPDF}
          >
            Share
          </Button>
          <Button
            className="exportButton"
            variant="danger"
            onClick={this.exportPDF}
          >
            Download
          </Button>
        </div>
        <Container className="cv_container card_shadow_1">
          {windowWidth >= screenSizes.small ? (
            <Row>
              <Col md={8}>{mainSections}</Col>
              <SideBar windowWidth={windowWidth} isMobile={isMobile} />
            </Row>
          ) : (
            <React.Fragment>
              <Col md={8}>{mainSections}</Col>
              <SideBar windowWidth={windowWidth} isMobile={isMobile} />
            </React.Fragment>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

CV.propTypes = {
  windowWidth: PropTypes.number,
  isMobile: PropTypes.bool
};

export default CV;
