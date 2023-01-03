import React, { useRef } from "react";
import { Col, Row, Button, Accordion } from "react-bootstrap";
import { HiOutlineDownload } from "react-icons/hi";

import { exportPDF } from "../../utils";
import {
  summary,
  experience,
  education,
  skills,
  contracts,
  contact_info,
  interests,
  screenSizes,
} from "../../constants";

import "./styles/cv.scss";

interface CVProps {
  windowWidth: Number;
  cvRef: React.RefObject<HTMLDivElement>;
}

const CV: React.FC<CVProps> = ({ windowWidth, cvRef }) => {
  const expierenceSection = experience.map(
    ({ dates, role, company_name, desc, tech }, i) => (
      <div className={i !== 0 && role ? "border-top pt-3" : ""}>
        <h4>{role}</h4>
        <h5>{company_name}</h5>
        <p>{dates}</p>
        <p>
          Key Technologies: <br /> {tech}
        </p>
        <p>{desc}</p>
      </div>
    )
  );

  const educationSection = education.map(({ dates, org_name, details }) => (
    <div>
      <h5 className="mb-0">{org_name}</h5>
      <p>{dates}</p>
      {details.map((qualification) => (
        <p>{qualification}</p>
      ))}
    </div>
  ));

  const contractSection = contracts.map(({ dates, org_name, details }) => (
    <div>
      <h5 className="mb-0">{org_name}</h5>
      <p>{dates}</p>
      <p>{details}</p>
    </div>
  ));

  const contactSection = Object.entries(contact_info).map(([key, val]) => (
    <p>
      <span className="bold">{`${key}:`}</span> <br />
      {val}
    </p>
  ));

  const skillsSection = (
    <p>
      {skills.map((skill) => (
        <>
          {skill}
          <br />
        </>
      ))}
    </p>
  );

  const sections = {
    leftCol: [
      {
        title: "Summary",
        content: <p>{summary}</p>,
      },
      {
        title: "Experience",
        content: expierenceSection,
      },
    ],
    rightCol: [
      {
        title: "Contact Info",
        content: contactSection,
      },
      {
        title: "Skills",
        content: skillsSection,
      },
      {
        title: "Contract Work",
        content: contractSection,
      },
      {
        title: "Education",
        content: educationSection,
      },
      {
        title: "Interests",
        content: <p>{interests}</p>,
      },
    ],
  };

  const Content = (
    <Row>
      <Button
        className="download bs-1 d-none d-md-block d-sm-none"
        variant="secondary"
        size="sm"
        onClick={() => exportPDF(cvRef?.current)}
        data-html2canvas-ignore
      >
        <HiOutlineDownload />
      </Button>
      <Col md={9} sm={3} className="pt-20">
        {sections.leftCol.map(({ title, content }) => (
          <>
            <h3>{title}</h3>
            <p>{content}</p>
          </>
        ))}
      </Col>
      <Col md={3} sm={3} className="sidebar_container">
        {sections.rightCol.map(({ title, content }) => (
          <>
            <h3>{title}</h3>
            <p>{content}</p>
          </>
        ))}
      </Col>
    </Row>
  );

  const MobileContent = (
    <Accordion defaultActiveKey={["0"]} flush>
      {[...sections.leftCol, ...sections.rightCol].map(
        ({ title, content }, i) => (
          <Accordion.Item eventKey={String(i)}>
            <Accordion.Header>
              <h3>{title}</h3>
            </Accordion.Header>
            <Accordion.Body>{content}</Accordion.Body>
          </Accordion.Item>
        )
      )}
    </Accordion>
  );

  return (
    <div className="cv_container bs-1" ref={cvRef}>
      {windowWidth > screenSizes.md ? Content : MobileContent}
    </div>
  );
};

export default CV;
