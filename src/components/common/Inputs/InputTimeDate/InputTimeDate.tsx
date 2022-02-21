import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./InputTimeDate.module.css";

interface IInputTimeDate {
  textName: string;
  registerDate: UseFormRegisterReturn;
  registerTime: UseFormRegisterReturn;
  mini?: string;
  maxi?: string;
  minTime?: string;
  maxTime?: string;
  valueTime?: string;
}

const InputTimeDate: React.FC<IInputTimeDate> = ({
  textName,
  registerDate,
  registerTime,
  mini,
  maxi,
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
        min={mini}
        max={maxi}
        className={classes.timeDate}
        type="date"
        {...registerDate}
      />
    </div>
  </>
);

export default InputTimeDate;
