import React, { ReactNode } from "react";

import "./styles/timeline.scss";

export interface TimelineItem {
  title?: string;
  position: "top" | "bottom";
  tech?: string;
  image?: {
    src: string;
    alt: string;
  };
  content?: string;
  date: string;
  icon?: ReactNode;
}

// https://codepen.io/nickoafan/pen/eJMaBx

const TimeLineItem: React.FC<
  TimelineItem & {
    total: number;
  }
> = ({ title, tech, position = "top", image, content, date, total, icon }) => (
  <li style={{ width: `${100 / total}%` }}>
    <div className={`image ${position}`}>{icon}</div>
    <div
      className={`text-white content-${
        position === "bottom" ? "top" : "bottom"
      }`}
    >
      <h3>{title}</h3>
      {tech && <p>{tech}</p>}
      {content && <p>{content}</p>}
    </div>
    <span className={`date ${position}`}>{date}</span>
  </li>
);

interface TimelineProps {
  events: Array<TimelineItem>;
}
const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const itemsPerLine = 4;
  return (
    <div className="timeline-container">
      {[...Array(Math.floor(events.length / itemsPerLine))].reduce(
        (timeline, _, i) => {
          timeline.push(
            <ol className="timeline">
              {events
                .slice(i * itemsPerLine, (i + 1) * itemsPerLine)
                .map((event) => (
                  <TimeLineItem {...event} total={itemsPerLine} />
                ))}
            </ol>
          );
          return timeline;
        },
        []
      )}
    </div>
  );

  // return (
  //   <div className="timeline-container">
  //     <ol className="timeline">
  //       {events.map((event) => (
  //         <TimeLineItem {...event} total={events.length} />
  //       ))}
  //     </ol>
  //   </div>
  // );
};

export default Timeline;
