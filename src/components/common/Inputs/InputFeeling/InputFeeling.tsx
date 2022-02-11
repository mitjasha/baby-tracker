import React, { useState } from "react";
import classes from "./InputFeeling.module.css";
import InputGender from "../InputGender/InputGender";
import InputFeelingConst from "./InputFeelingConst";

const InputFeeling: React.FC = () => {
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
            onClick={() => setChouse(el.id)}
            isChose={chose === el.id}
          />
        ))}
      </div>
    </>
  );
};

export default InputFeeling;
