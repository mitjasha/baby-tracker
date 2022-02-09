import React, { MouseEvent } from "react";
import classes from "./InputFeeling.module.css";
import InputGender from "../InputGender/InputGender";
import InputFeelingConst from "./InputFeelingConst";

const InputFeeling: React.FC = () => {
  const onClickBaby = (event: MouseEvent): void => {
    const target = event.currentTarget;
    target.classList.toggle(classes.active);
    target.classList.toggle(classes.disactive);
    if (!target.className.includes("disactive")) {
      console.log(target.getAttribute("id"));
    }
  };

  return (
    <>
      <div className={classes.container}>
        {InputFeelingConst.map((el, ind) => (
          <InputGender
            className={classes.disactive}
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
