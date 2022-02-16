import React from "react";

import classes from "./Timeline.module.css";

export interface IItem {
  id: string;
  event: string;
  startTime: string;
  duration: number;
  description: string;
  key: number;
}
const TimelineItem: React.FC<IItem> = ({
  id,
  event,
  startTime,
  description,
}) => (
  <>
    <li>
      {/* <i className="fa" /> */}
      <div className={classes.timelineItem} id={id}>
        <span className="time">
          {/* <i className="fa fa-clock-o" /> */}
          {startTime}
        </span>
        <div className={classes.timelineHeader}>{event}</div>
        <div className={classes.timelineHeader}>{description}</div>
      </div>
    </li>
  </>
);

export default TimelineItem;
