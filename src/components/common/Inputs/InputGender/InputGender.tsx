import React from "react";
import cn from "classnames";
import classes from "./InputGender.module.css";

interface IInputGender {
  img: string;
  className?: string;
  textBaby: string;
  onClick?: () => void;
  id: string;
  isChose?: boolean;
}

const InputGender: React.FC<IInputGender> = ({
  img,
  textBaby,
  className,
  onClick,
  isChose,
  id,
}) => (
  <>
    <div
      className={cn(
        classes.gender,
        className,
        isChose ? classes.active : classes.disactive,
      )}
      id={id}
      onClick={onClick}
    >
      <img className={cn(classes.baby)} src={img}></img>
      <div className={classes.title}>{textBaby}</div>
    </div>
  </>
);

export default InputGender;
