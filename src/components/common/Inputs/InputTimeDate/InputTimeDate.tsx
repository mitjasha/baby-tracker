import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./InputTimeDate.module.css";

interface IInputTimeDate {
  textName: string;
  registerDate: UseFormRegisterReturn;
  registerTime: UseFormRegisterReturn;
  min?: string;
  max?: string;
  minTime?: string;
  maxTime?: string;
  valueTime?: string;
}

const InputTimeDate: React.FC<IInputTimeDate> = ({
  textName,
  registerDate,
  registerTime,
  min,
  max,
  minTime,
  maxTime,
}) => (
  <>
    <div className={classes.container}>
      <span className={classes.title}>{textName}</span>
      <input
        className={classes.timeDate}
        type="time"
        min={minTime}
        max={maxTime}
        {...registerTime}
      />
      <input
        min={min}
        max={max}
        className={classes.timeDate}
        type="date"
        {...registerDate}
      />
    </div>
  </>
);

export default InputTimeDate;
