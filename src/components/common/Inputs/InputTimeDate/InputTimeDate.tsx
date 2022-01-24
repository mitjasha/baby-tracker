import React from "react";
import cn from "classnames";
import classes from "./InputTimeDate.module.css";
import { currentDay, currentTime } from "../../../helpers/changeNum";

interface IInputTimeDate {
  className: string;
  textName: string;
}

const InputTimeDate: React.FC<IInputTimeDate> = ({ className, textName }) => (
  <div className={classes.container}>
    <span className={classes.title}>{textName}</span>
    <input
      className={cn(classes.timeDate, { className })}
      type="time"
      defaultValue={currentTime}
    />
    <input
      className={cn(classes.timeDate, { className })}
      type="date"
      defaultValue={currentDay}
    />
  </div>
);

export default InputTimeDate;
