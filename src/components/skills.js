import React from "react";
import { Chart } from "react-google-charts";

import "../components/styles/skills.scss";

const options = {
  hAxis: {
    title: "Skill Proficiency",
    minValue: 0,
    maxValue: 5,
    gridlines: {
      color: "transparent"
    }
  },
  vAxis: {
    gridlines: {
      color: "transparent"
    }
  },
  chartArea: {
    height: "100%",
    width: "50%"
  },
  backgroundColor: { fill: "transparent" },
  bars: "horizontal",
  legend: { position: "none" },
  isStacked: true,
  colors: ["#ffffff", "#c1c1c1"],
  enableInteractivity: false
  // tooltip: { trigger: "none" }
};

const data = [
  [
    { type: "string", id: "Skill" },
    { type: "number", id: "Proficiency" },
    { type: "number", id: "Deficit" }
  ],
  ["React JS", 5, 0],
  ["Go", 5, 0],
  ["Scss", 4, 1],
  ["Angular Material JS", 4, 1],
  ["Redux", 3, 2],
  ["Kubenetes", 1, 4],
  ["SharePoint 2010/2013", 2, 3]
];

const Skills = () => (
  <Chart
    width={"300px"}
    height={"150px"}
    chartType="BarChart"
    loader={<div>Loading Chart</div>}
    data={data}
    options={options}
    rootProps={{ "data-testid": "1" }}
  />
);

export default Skills;
