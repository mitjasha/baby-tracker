import React from "react";
import TimelineItem, { IItem } from "./TimelineItem";
import classes from "./Timeline.module.css";
import { IEventResponse } from "../../../api/api.interface";

// interface ITimeline {
//   height?: number;
// }

// interface ITimelineItem {
//   ts: string;
//   text: string;
// }

function getFormattedData(items: IEventResponse[]) {
  const activities: { [date: string]: IItem[] } = {};

  items.forEach(
    ({ id, event, startTime, endTime, description }, index: number) => {
      const startDate = Date.parse(startTime);
      const endDate = Date.parse(endTime);
      const duration = endDate - startDate;
      const dateStr: string = Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format(new Date(startDate));

      const list: IItem[] = [];
      list.push({
        id,
        event,
        startTime: Intl.DateTimeFormat("en", {
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
// const events: ITimelineItem[] = [
//   { ts: "2017-09-17T12:22:46.587Z", text: "Logged in" },
//   { ts: "2017-09-17T12:21:46.587Z", text: "Clicked Home Page" },
//   { ts: "2017-09-17T12:20:46.587Z", text: "Edited Profile" },
//   { ts: "2017-09-16T12:22:46.587Z", text: "Registred" },
//   { ts: "2017-09-16T12:21:46.587Z", text: "Clicked Cart" },
//   { ts: "2017-09-16T12:20:46.587Z", text: "Clicked Checkout" },
// ];

const events: IEventResponse[] = [
  {
    id: "b3639cd8-4c71-46b8-8784-ead390915690",
    event: "Кормление",
    startTime: "2022-02-12T16:07:13.259Z",
    endTime: "2022-02-12T16:07:13.259Z",
    description: "",
  },
  {
    id: "a706b339-a9c1-4b38-beca-523ff0455b9d",
    event: "Кормление",
    startTime: "2022-02-12T16:11:23.405Z",
    endTime: "2022-02-12T16:14:39.825Z",
    description: "Правая",
  },
  {
    id: "4a25d90a-6299-49e0-a847-30fa802de370",
    event: "Прогулка",
    startTime: "2022-02-12T16:16:22.842Z",
    endTime: "2022-02-12T16:17:39.825Z",
    description: "прогулка",
  },
  {
    id: "3170df62-86c2-4e8c-8da0-fe48a6f79abb",
    event: "Прогулка",
    startTime: "2022-02-12T10:16:22.842Z",
    endTime: "2022-02-12T12:16:22.842Z",
    description: "прогулка",
  },
];

const Timeline: React.FC = () => {
  const activities = getFormattedData(events);
  const dates = Object.keys(activities);
  return (
    <div className="timelineContainer">
      {dates.map((d) => (
        <ul className="timeLine" key={d}>
          <li className={classes.timeLabel}>
            <span>{d}</span>
          </li>
          {console.log(activities[d])}
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
