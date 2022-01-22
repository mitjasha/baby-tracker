import React from "react";
import cn from "classnames";
import "./InputTimeDate.css";

interface IInputTimeDate {
  className: string;
  textName: string;
}

const InputTimeDate: React.FC<IInputTimeDate> = ({
  className,
  textName,
}) => {
  const dateValue = () => {
   const d = new Date();
  const dt = d.getDate();
let mn = d.getMonth();
  mn += mn;
  const yy = d.getFullYear();
  const res = `${dt}/${mn}/${yy}`;
  return res;
  };
  return (  <div className = "input-time-date-container">
    <span>{textName}</span>
      <input className={cn("input-time-date", {className})}  type = "time"/>
      <input className={cn("input-time-date", {className})} type = "date" onChange={dateValue} />
    </div>
);
};

export default InputTimeDate;