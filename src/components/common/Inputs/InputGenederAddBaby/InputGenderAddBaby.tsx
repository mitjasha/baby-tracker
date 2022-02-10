import React from "react";
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
}) =>  (
    <>
      <div className={cn(classes.titileContainer)}>{textTitle}</div>
      <div className={classes.container}>
        <InputGender
          textBaby={textBoy}
          img={boy}
          id={"boy"}
        />
        <InputGender
          textBaby={textGirl}
          img={girl}
          id={"girl"}
        />
      </div>
    </>
  );

export default InputGenderAddBaby;
