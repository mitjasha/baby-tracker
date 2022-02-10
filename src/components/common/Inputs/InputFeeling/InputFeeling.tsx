import React, { MouseEvent, useState } from "react";
import classes from "./InputFeeling.module.css";
import InputGender from "../InputGender/InputGender";
import InputFeelingConst from "./InputFeelingConst";

const InputFeeling: React.FC = () => {
  const [chose, setChouse] = useState(false);
  const onClickBaby = (event: MouseEvent): void => {
    event.preventDefault();
   setChouse(!chose);
   console.log(chose);
  };

  return (
    <>
      <div className={classes.container}>
        {InputFeelingConst.map((el, ind) => (
          <InputGender
          className= {chose ? classes.active : classes.disactive}            
            key={ind}
            textBaby={el.text}
            onClick={onClickBaby}
            img={el.img}
            id={el.id}
          />
        ))}
      </div>
    </>
  );
};

export default InputFeeling;
