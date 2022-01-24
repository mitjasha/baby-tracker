import React, { useState } from "react";
import cn from "classnames";
import classes from "./InputGender.module.css";

interface IInputGender {
  classBoy: string;
  classGirl: string;
  textBoy: string;
  textGirl: string;
  textTitle: string;
}

const InputGender: React.FC<IInputGender> = ({
  classBoy,
  classGirl,
  textBoy,
  textGirl,
  textTitle,
}) => {
  const [stateBoy, setStateBoy] = useState(false);

  const onClickBoy = () => setStateBoy(!stateBoy);

  return (
    <>
      <div className={cn(classes.titileContainer)}>{textTitle}</div>
      <div className={classes.container}>
        <div
          className={cn(classes.gender, stateBoy ? "" : classes.active)}
          onClick={onClickBoy}
        >
          <div className={cn(classes.baby, classBoy)}>
            <p className={classes.title}>{textBoy}</p>
          </div>
        </div>
        <div
          className={cn(classes.gender, stateBoy ? classes.active : "")}
          onClick={onClickBoy}
        >
          <div className={cn(classes.baby, classGirl)}>
            <p className={classes.title}>{textGirl}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputGender;
