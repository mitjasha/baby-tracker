import React, { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./InputEat.module.css";

interface IInputEat {
  registerValue: UseFormRegisterReturn;
  registerData: UseFormRegisterReturn;
  registerText: UseFormRegisterReturn;
  min?: string;
  max?: string;
  step?: string;
  placeholder: string;
  children: ReactNode;
  oz: string;
}

const InputEat: React.FC<IInputEat> = ({
  registerValue,
  registerData,
  registerText,
  min,
  max,
  step,
  placeholder,
  children,
  oz,
}) => (
  <>
    <div className={classes.container}>
      <select className={classes.select} {...registerData}>
        {children}
      </select>
      <input
        className={classes.input}
        type="number"
        min={min}
        max={max}
        step={step}
        {...registerValue}
      />
      <span className={classes.title}>{oz}</span>
    </div>
    <input
      className={classes.text}
      type="text"
      {...registerText}
      placeholder={placeholder}
    />
  </>
);

export default InputEat;
