import React from "react";
import cn from "classnames";
import classes from "./ToolTip.module.css";

interface IToolTip {
  className?: string;
  classContainer?: string;
  text: string;
}

const ToolTip: React.FC<IToolTip> = ({ className, text, classContainer }) => (
  <div className={cn(classes.container, classContainer)}>
    <p className={cn(classes.error, className)}>{text}</p>
  </div>
);

export default ToolTip;
