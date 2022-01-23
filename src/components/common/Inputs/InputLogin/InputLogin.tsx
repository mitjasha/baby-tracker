import React from "react";
import cn from "classnames";
import classes from "./InputLogin.module.css";

interface IInputTimeDate {
  className: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputLogin: React.FC<IInputTimeDate> = ({
  className,
  placeholder,
  type,
  value,
  onChange,
}) => (
  <div className={classes.container}>
    <input
      className={cn(classes.input, className)}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputLogin;
