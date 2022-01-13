import React from "react";
import "./ProgressBar.css";
import cnd from "classnames";

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
  icon}) => (
  <>
  <div className= {classNameContainer}>
    <div className={cnd("img-progress-bar", icon)}/>
    <span>{textName}</span>
      <progress max = {max} value={value} className= {cnd("progress-line", classNameProgressBar)}/>
      <span>{textValue}</span>
      </div>
  </>
);

export default ProgressBar;