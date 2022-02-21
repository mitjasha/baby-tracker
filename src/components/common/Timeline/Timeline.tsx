import React from "react";
import TimelineItem, { IItem } from "./TimelineItem";
import classes from "./Timeline.module.css";
import { IEventResponse } from "../../../api/api.interface";

function getFormattedData(items: IEventResponse[]) {
  const activities: { [date: string]: IItem[] } = {};
  items.forEach(
    ({ id, event, startTime, endTime, description }, index: number) => {
      const startDate = Date.parse(startTime);
      // console.log(typeof startTime, startTime);
      // console.log(new Date(Date.parse(startTime)).getHours());

      const endDate = Date.parse(endTime);
      const duration = endDate - startDate;
      // const dateStr = new Date(startDate).toISOString().split("T")[0];
      const dateStr: string = Intl.DateTimeFormat("ru-Ru", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        // hour: "numeric",
        // minute: "numeric",
        // second: "numeric",
      }).format(new Date(startDate));

      const list: IItem[] = activities[dateStr] || [];
      list.push({
        id,
        event,
        startTime: Intl.DateTimeFormat("ru-Ru", {
          hour: "numeric",
          minute: "numeric",
        }).format(new Date(startDate)),
        duration,
        description,
        key: index,
      });
      activities[dateStr] = list;
    },
  );

  return activities;
}

interface ITimelineProps {
  events?: IEventResponse[];
}

const Timeline: React.FC<ITimelineProps> = ({ events }) => {
  if (events === undefined) {
    // eslint-disable-next-line no-param-reassign
    events = [
      {
        id: "",
        event: "",
        startTime: String(new Date()),
        endTime: String(Date.now()),
        description: "",
      },
    ];
  }

  const activities = getFormattedData(
    events.sort((a, b) => Date.parse(b.startTime) - Date.parse(a.startTime)),
  );
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
                duration={duration}
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
