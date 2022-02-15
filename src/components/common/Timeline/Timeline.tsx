import React from "react";
import TimelineItem, { IItem } from "./TimelineItem";

// interface ITimeline {
//   height?: number;
// }

interface ITimelineItem {
  ts: string;
  text: string;
}

function getFormattedData(items: ITimelineItem[]) {
  const activities: { [date: string]: IItem[] } = {};
  items.forEach(({ ts, text }, index: number) => {
    const date = Date.parse(ts);
    const dateStr: string = Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(new Date(date));

    const list: IItem[] = [];
    list.push({
      time: Intl.DateTimeFormat("en", {
        hour: "numeric",
        minute: "numeric",
      }).format(new Date(date)),
      text,
      key: index,
    });
    activities[dateStr] = list;
  });
  return activities;
}
const events: ITimelineItem[] = [
  { ts: "2017-09-17T12:22:46.587Z", text: "Logged in" },
  { ts: "2017-09-17T12:21:46.587Z", text: "Clicked Home Page" },
  { ts: "2017-09-17T12:20:46.587Z", text: "Edited Profile" },
  { ts: "2017-09-16T12:22:46.587Z", text: "Registred" },
  { ts: "2017-09-16T12:21:46.587Z", text: "Clicked Cart" },
  { ts: "2017-09-16T12:20:46.587Z", text: "Clicked Checkout" },
];

const Timeline: React.FC = () => {
  const activities = getFormattedData(events);
  const dates = Object.keys(activities);
  return (
    <div className="time-line-ctnr">
      {dates.map((d) => (
        <ul className="time-line" key={d}>
          <li className="time-label">
            <span>{d}</span>
          </li>
          {console.log(activities[d])}
          {activities[d].map(({ time, text, key }) => (
            <TimelineItem time={time} text={text} key={key} />
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Timeline;
