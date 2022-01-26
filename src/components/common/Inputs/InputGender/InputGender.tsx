import React from "react";
import cn from "classnames";
import classes from "./InputGender.module.css";

interface IInputGender {
  classBaby: string;
  textBaby: string;
  onClick: () => void;
}

const InputGender: React.FC<IInputGender> = ({
  classBaby,
  textBaby,
  onClick,
}) => (
  <>
    <div className={cn(classes.gender)} onClick={onClick}>
      <div className={cn(classes.baby, classBaby)}>
        <p className={classes.title}>{textBaby}</p>
      </div>
    </div>
  </>
);

export default InputGender;
