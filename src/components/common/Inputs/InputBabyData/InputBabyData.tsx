import React from "react";
import cn from "classnames";
import classes from "./InputBabyData.module.css";

interface IInputBabyData {
  classInput?: string;
  classContainer?: string;
  classTitle?: string;
  textName: string;
  type: string;
  defaultValue?: string;
  placeholder?: string;
  value?: string;
  min?: string;
  max?: string;
  step?: string;
}

const InputBabyData: React.FC<IInputBabyData> = ({
  classInput,
  classContainer,
  classTitle,
  textName,
  type,
  defaultValue,
  placeholder,
  value,
  min,
  max,
  step,
}) => (
  <div className={cn(classes.container, classContainer)}>
    <div className={cn(classes.title, classTitle)}>{textName}</div>
    <div className={classes.wrapper}>
      <input
        className={cn(classes.input, classInput)}
        type={type}
        defaultValue={defaultValue}
        value={value}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        required
      />
    </div>
  </div>
);

export default InputBabyData;
