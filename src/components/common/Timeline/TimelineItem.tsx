import React from "react";
import classes from "./Timeline.module.css";
import TimelineConst from "./TimelineConst";

export interface IItem {
  id: string;
  event: string;
  startTime: string;
  duration: number | undefined;
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
        <div className={classes.icon}>
          <img
            className={classes.img}
            src={
              TimelineConst.filter((elem) => elem.text === event).map(
                (elem) => elem.icon,
              )[0]
            }
            alt=""
          />
        </div>
        <div>
          <div className={classes.eventContainer}>
            <span className={classes.timelineHeader}>
              {duration &&
                `${Math.floor(duration / 3600000) % 60}ч ${
                  Math.floor(duration / 60000) % 60
                }мин - `}
              {event !== "Кормление" && <span> {event}</span>}
              <p>{`${description}`}</p>
            </span>
          </div>
        </div>
        <span className={classes.time}>{startTime}</span>
      </div>
    </li>
  </>
);

export default TimelineItem;
