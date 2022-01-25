import React, { useState } from "react";
import cn from "classnames";
import classes from "./InputGenderAddBaby.module.css";
import InputGender from "../InputGender/InputGender";

interface IInputGenderAddBaby {
  textTitle: string;
  textGirl: string;
  textBoy: string;
  classBoy: string;
  classGirl: string;
}

const InputGenderAddBaby: React.FC<IInputGenderAddBaby> = ({
  textTitle,
  textGirl,
  textBoy,
  classBoy,
  classGirl,
}) => {
  const [stateBaby, setStateBaby] = useState(false);

  const onClickBaby = () => setStateBaby(!stateBaby);

  return (
    <>
      <div className={cn(classes.titileContainer)}>{textTitle}</div>
      <div className={classes.container}>
        <InputGender
          classBaby={cn(
            classBoy,
            stateBaby ? classes.disactive : classes.active,
          )}
          textBaby={textBoy}
          onClick={onClickBaby}
        />
        <InputGender
          classBaby={cn(
            classGirl,
            stateBaby ? classes.active : classes.disactive,
          )}
          textBaby={textGirl}
          onClick={onClickBaby}
        />
      </div>
    </>
  );
};

export default InputGenderAddBaby;
