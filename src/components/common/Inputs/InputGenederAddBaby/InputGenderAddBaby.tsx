import React, { useState } from "react";
import cn from "classnames";
import classes from "./InputGenderAddBaby.module.css";
import InputGender from "../InputGender/InputGender";
import boy from "../../../../assets/png/feeling/boy/06.png";
import girl from "../../../../assets/png/feeling/girl/06.png";

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
}) => {
  const [stateBaby, setStateBaby] = useState(false);

  const onClickBaby = () => setStateBaby(!stateBaby);

  return (
    <>
      <div className={cn(classes.titileContainer)}>{textTitle}</div>
      <div className={classes.container}>
        <InputGender
          className={stateBaby ? classes.disactive : classes.active}
          textBaby={textBoy}
          img={boy}
          onClick={onClickBaby}
        />
        <InputGender
          className={stateBaby ? classes.active : classes.disactive}
          textBaby={textGirl}
          img={girl}
          onClick={onClickBaby}
        />
      </div>
    </>
  );
};

export default InputGenderAddBaby;
