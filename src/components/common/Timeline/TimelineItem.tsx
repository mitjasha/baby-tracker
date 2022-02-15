import React from "react";

export interface IItem {
  time: string;
  text: string;
  key: number;
}
const TimelineItem: React.FC<IItem> = ({ time, text }) => (
  <>
    <li>
      {/* <i className="fa" /> */}
      <div className="time-line-item">
        <span className="time">
          {/* <i className="fa fa-clock-o" /> */}
          {time}
        </span>
        <div className="time-line-header">{text}</div>
      </div>
    </li>
  </>
);

export default TimelineItem;
