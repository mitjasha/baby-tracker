import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./InputFeeling.module.css";
import InputGender from "../InputGender/InputGender";
import genderChange from "../../../helpers/genderChange";
import InputFeelingConst from "./InputFeelingConst";

interface IInputFeeling {
  register: UseFormRegisterReturn;
  classNameError: string;
  gender: string;
}

const InputFeeling: React.FC<IInputFeeling> = ({
  classNameError,
  register,
  gender,
}) => {
  const [chose, setChouse] = useState("");

  return (
    <>
      <div className={classes.container}>
        {InputFeelingConst.map((el, ind) => (
          <InputGender
            classNameError={classNameError}
            key={ind}
            textBaby={genderChange(el.text, gender)}
            img={el.img}
            id={el.id}
            onChange={() => {
              if (!chose) {
                setChouse(genderChange(el.text, gender));
              } else if (chose !== genderChange(el.text, gender)) {
                setChouse(genderChange(el.text, gender));
              } else setChouse("");
            }}
            isChose={chose === genderChange(el.text, gender)}
            register={register}
          />
        ))}
      </div>
    </>
  );
};

export default InputFeeling;
