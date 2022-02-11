import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./InputGenderAddBaby.module.css";
import InputGender from "../InputGender/InputGender";
import genderConst from "./InputGenderAddBabyConst";

interface IInputGenderAddBaby {
  register: UseFormRegisterReturn;
}

const InputGenderAddBaby: React.FC<IInputGenderAddBaby> = ({ register }) => {
  const [chose, setChouse] = useState("");
  return (
    <>
      <div className={classes.container}>
        {genderConst.map((el, ind) => (
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

export default InputGenderAddBaby;
