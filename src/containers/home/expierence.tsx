import React from "react";
import Timeline from "../../components/timeline";
import { IoLogoAngular } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { DiJqueryLogo } from "react-icons/di";
import {
  SiRedux,
  SiLaravel,
  SiPerl,
  SiMicrosoftsharepoint,
} from "react-icons/si";
import { WhiteHat, Golang } from "../../components/icons";

import type { TimelineItem } from "../../components/timeline";

import "./styles/expierence.scss";

const Expierence = () => {
  const expierenceList: Array<TimelineItem> = [
    {
      title: "SharePoint Developer - O2 UK",
      tech: "JQuery, SharePoint 2010, Classic ASP, MooTools, CSS, Material",
      icon: <DiJqueryLogo />,
      position: "top",
      date: "2016",
    },
    {
      title: "Got to work with Facebook (Meta)",
      icon: <IoLogoAngular />,
      tech: "Angular 2, NodeJS, Material, Workplace by Facebook, Express, SCSS",
      position: "bottom",
      // content:
      //   "Lucked into my first job as a developer, code known at this point: none.",
      date: "2017",
    },
    {
      title: "O2 blueprint rebranding",
      icon: <SiMicrosoftsharepoint />,
      tech: "ThreeJs, JQuery, AngularJS, SharePoint 2013",
      position: "top",
      // content:
      //   "Lucked into my first job as a developer, code known at this point: none.",
      date: "2018",
    },
    {
      title: "Full Stack - Whitehat Security",
      icon: <GrReactjs />,
      tech: "ReactJS, Golang, Redux, Bootstrap, Github, Docker, Kubernetes",
      position: "bottom",
      // content: "Moved to Belfast working on a SaaS security application.",
      date: "2018",
    },
    {
      title: "API AST Scanner",
      icon: <Golang />,
      tech: "Perl, ReactJS, GoLang",
      position: "top",
      // content: "Took point on the creation of a some stuff and things",
      date: "2019",
    },
    {
      title: "WhiteHat Security, aquired by NTT Security",
      icon: <WhiteHat />,
      position: "bottom",
      // content:
      // "Started to integrate our systems with NTT and get up to speed with there process",
      date: "2019",
    },
    {
      title: "Frontend Developer - Overwatch Research",
      icon: <SiRedux />,
      tech: "ReactJS, Redux, Tachyons, Hooks, Docker",
      position: "top",
      // content:
      //   "Spent my time converting class components to functional with hooks and implementing a reusabel spreadsheet component using Handsontable as part of a new feature implementation.",
      date: "2020",
    },
    {
      title: "Overwatch Research, aquired by Benchling",
      icon: <SiLaravel />,
      tech: "Moved to Full Stack Developer - ReactJS, PHP (laravel) and Java (Boot spring)",
      position: "bottom",
      // content:
      //   "Spent my time converting class components to functional with hooks and implementing a reusabel spreadsheet component using Handsontable as part of a new feature implementation.",
      date: "2021",
    },
  ];
  return <Timeline events={expierenceList} />;
};

export default Expierence;
