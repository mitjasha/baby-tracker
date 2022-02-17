import React from "react";

import classes from "./Timeline.module.css";
import TimelineConst from "./TimelineConst";

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
  duration,
}) => (
  <>
    <li className={classes.timelineElement}>
      <div className={classes.timelineItem} id={id}>
        <img
          className={classes.img}
          src={
            TimelineConst.filter((elem) => elem.text === event).map(
              (elem) => elem.icon,
            )[0]
          }
          alt=""
        />
        <div>
          <div className={classes.timelineHeader}>{event}</div>
          {event.toLocaleLowerCase() !== description.toLocaleLowerCase() && (
            <div className={classes.timelineHeader}>{description}</div>
          )}
          <div className={classes.timelineDuration}>{`${
            Math.floor(duration / 3600000) % 60
          }ч ${Math.floor(duration / 60000) % 60}мин ${Math.floor(
            (duration / 1000) % 60,
          )}сек`}</div>
        </div>
        <span className="time">{startTime}</span>
      </div>
    </li>
  </>
);

export default TimelineItem;
