import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./InputBreast.module.css";
import InputBreastConst from "./InputBreastConst";

interface IInputBreast {
  registerData: UseFormRegisterReturn;
}

const InputBreast: React.FC<IInputBreast> = ({ registerData }) => (
  <div className={classes.container}>
    <select className={classes.select} {...registerData}>
      {InputBreastConst.map((el) => (
        <option key={el.text}>{el.text}</option>
      ))}
    </select>
  </div>
);
export default InputBreast;
