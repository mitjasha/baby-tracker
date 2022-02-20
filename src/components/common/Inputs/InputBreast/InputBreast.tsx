import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./InputBreast.module.css";

interface IInputBreast {
  registerData: UseFormRegisterReturn;
}

const InputBreast: React.FC<IInputBreast> = ({ registerData }) => (
  <div className={classes.container}>
    <select className={classes.select} {...registerData}>
      <option>Левая</option>
      <option>Правая</option>
    </select>
  </div>
);
export default InputBreast;
