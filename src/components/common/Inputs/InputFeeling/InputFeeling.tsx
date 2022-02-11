import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./InputFeeling.module.css";
import InputGender from "../InputGender/InputGender";
import InputFeelingConst from "./InputFeelingConst";

interface IInputFeeling {
  register: UseFormRegisterReturn;
}

const InputFeeling: React.FC<IInputFeeling> = ({ register }) => {
  const [chose, setChouse] = useState("");
  return (
    <>
      <div className={classes.container}>
        {InputFeelingConst.map((el, ind) => (
          <InputGender
            key={ind}
            textBaby={el.text}
            img={el.img}
            id={el.id}
            onChange={() => setChouse(el.id)}
            isChose={chose === el.id}
            register={register}
          />
        ))}
      </div>
    </>
  );
};

export default InputFeeling;
