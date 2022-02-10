import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
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
  min?: string | undefined;
  max?: string | undefined;
  step?: string;
  register: UseFormRegisterReturn;
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
  register,
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
        {...register}
      />
    </div>
  </div>
);

export default InputBabyData;
