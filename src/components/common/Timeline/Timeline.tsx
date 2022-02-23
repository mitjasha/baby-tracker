import React from "react";
import TimelineItem from "./TimelineItem";
import classes from "./Timeline.module.css";
import { IEventResponse } from "../../../api/api.interface";
import {
  activityConstNoFeelingRu,
  feedingBreastRu,
} from "../../helpers/getDescription";
import getEventsSort from "../../helpers/getEventSort";

interface ITimelineProps {
  events: IEventResponse[];
}

const Timeline: React.FC<ITimelineProps> = ({ events }) => {
  const activities = getEventsSort(events);

  const dates = Object.keys(activities);
  return (
    <div className={classes.timelineContainer}>
      {dates.map((d) => (
        <ul className={classes.timeLine} key={d}>
          <li className={classes.timeLabel}>
            <span>{d}</span>
          </li>
          {activities[d].map(
            ({ id, event, startTime, duration, description, key }) => (
              <TimelineItem
                id={id}
                event={event}
                startTime={startTime}
                duration={
                  feedingBreastRu.includes(description) ||
                  activityConstNoFeelingRu.includes(event)
                    ? duration
                    : undefined
                }
                description={description}
                key={key}
              />
            ),
          )}
        </ul>
      ))}
    </div>
  );
};

export default Timeline;
