import React from "react";
import cnd from "classnames";
import classes from "./ProgressBar.module.css";

interface IProgressBar {
  value: string;
  max: string;
  classNameProgressBar: string;
  classNameContainer: string;
  textName: string;
  textValue: string;
  icon: string;
}

const ProgressBar: React.FC<IProgressBar> = ({
  classNameContainer,
  max,
  value,
  classNameProgressBar,
  textName,
  textValue,
  icon,
}) => (
  <>
    <div className={classNameContainer}>
      <div className={cnd(classes.icon, icon)} />
      <span>{textName}</span>
      <progress
        max={max}
        value={value}
        className={cnd(classes.line, classNameProgressBar)}
      />
      <span>{textValue}</span>
    </div>
  </>
);

export default ProgressBar;
