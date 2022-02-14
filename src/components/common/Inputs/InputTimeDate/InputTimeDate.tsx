import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import cn from "classnames";
import classes from "./InputTimeDate.module.css";

interface IInputTimeDate {
  classNameError?: string;
  textName: string;
  registerDate: UseFormRegisterReturn;
  registerTime: UseFormRegisterReturn;
  min?: string;
  max?: string;
  minTime?: string;
  maxTime?: string;
  onChange?: () => void;
}

const InputTimeDate: React.FC<IInputTimeDate> = ({
  classNameError,
  textName,
  registerDate,
  registerTime,
  min,
  max,
  minTime,
  maxTime,
  onChange,
}) => (
  <>
    <div className={cn(classes.container)}>
      <span className={classes.title}>{textName}</span>
      <input
        className={cn(classes.timeDate, classNameError)}
        type="time"
        min={minTime}
        max={maxTime}
        {...registerTime}
      />
      <input
        min={min}
        max={max}
        className={cn(classes.timeDate, classNameError)}
        type="date"
        onInput={onChange}
        {...registerDate}
      />
    </div>
  </>
);

export default InputTimeDate;
