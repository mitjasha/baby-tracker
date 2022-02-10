import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import cn from "classnames";
import classes from "./InputLogin.module.css";

interface IInputTimeDate {
  className: string;
  placeholder: string;
  type: string;
  name?: string;
  register: UseFormRegisterReturn;
}

const InputLogin: React.FC<IInputTimeDate> = ({
  className,
  placeholder,
  type,
  register,
}) => (
  <>
    <input
      className={cn(classes.input, classes.container, className)}
      type={type}
      placeholder={placeholder}
      {...register}
    />
  </>
);

export default InputLogin;
