import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import cn from "classnames";
import classes from "./InputTimeDate.module.css";
import { currentDay, currentTime } from "../../../helpers/changeNum";

interface IInputTimeDate {
  className?: string;
  textName: string;
  registerDate: UseFormRegisterReturn;
  registerTime: UseFormRegisterReturn;
}

const InputTimeDate: React.FC<IInputTimeDate> = ({
  className,
  textName,
  registerDate,
  registerTime,
}) => (
  <>
    <div className={classes.container}>
      <span className={classes.title}>{textName}</span>
      <input
        className={cn(classes.timeDate, { className })}
        type="time"
        defaultValue={currentTime}
        {...registerTime}
      />
      <input
        className={cn(classes.timeDate, { className })}
        type="date"
        defaultValue={currentDay}
        {...registerDate}
      />
    </div>
  </>
);

export default InputTimeDate;
