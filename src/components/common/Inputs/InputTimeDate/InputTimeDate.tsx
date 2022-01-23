import React from "react";
import cn from "classnames";
import "./InputTimeDate.css";
import { currentDay, currentTime } from "../../../helpers/changeNum";

interface IInputTimeDate {
  className: string;
  textName: string;
}

const InputTimeDate: React.FC<IInputTimeDate> = ({ className, textName }) => {
  console.log(currentDay);
  return (
    <div className="input-time-date-container">
      <span className="title-input">{textName}</span>
      <input
        className={cn("input-time-date", { className })}
        type="time"
        defaultValue={currentTime}
      />
      <input
        className={cn("input-time-date", { className })}
        type="date"
        defaultValue={currentDay}
      />
    </div>
  );
};

export default InputTimeDate;
