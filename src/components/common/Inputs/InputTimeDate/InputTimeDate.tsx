import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import cn from "classnames";
import classes from "./InputTimeDate.module.css";

interface IInputTimeDate {
  classNameError?: string;
  textName: string;
  registerDate: UseFormRegisterReturn;
  registerTime: UseFormRegisterReturn;
}

const InputTimeDate: React.FC<IInputTimeDate> = ({
  classNameError,
  textName,
  registerDate,
  registerTime,
}) => (
  <>
    <div className={cn(classes.container)}>
      <span className={classes.title}>{textName}</span>
      <input
        className={cn(classes.timeDate, classNameError)}
        type="time"
        {...registerTime}
      />
      <input
        className={cn(classes.timeDate, classNameError)}
        type="date"
        {...registerDate}
      />
    </div>
  </>
);

export default InputTimeDate;
