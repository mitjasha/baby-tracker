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
            textBaby={genderChange(el, gender)}
            img={el.img}
            id={el.id}
            onChange={() => {
              if (!chose) {
                setChouse(genderChange(el, gender));
              } else if (chose !== genderChange(el, gender)) {
                setChouse(genderChange(el, gender));
              } else setChouse("");
            }}
            isChose={chose === genderChange(el, gender)}
            register={register}
          />
        ))}
      </div>
    </>
  );
};

export default InputFeeling;
