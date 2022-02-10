import React, { MouseEvent } from "react";
import cn from "classnames";
import classes from "./InputGender.module.css";

interface IInputGender {
  img: string;
  className?: string;
  textBaby: string;
  onClick: (event: MouseEvent) => void;
  id: string;
}

const InputGender: React.FC<IInputGender> = ({
  img,
  textBaby,
  className,
  onClick,
  id,
}) => (
  <>
    <div className={cn(classes.gender, className)} id={id} onClick={onClick}>
      <img className={cn(classes.baby)} src={img}></img>
      <div className={classes.title}>{textBaby}</div>
    </div>
  </>
);

export default InputGender;
