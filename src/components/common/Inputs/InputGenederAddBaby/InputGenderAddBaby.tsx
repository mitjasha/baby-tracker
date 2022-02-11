import React, { useState } from "react";
import classes from "./InputGenderAddBaby.module.css";
import InputGender from "../InputGender/InputGender";
import genderConst from "./InputGenderAddBabyConst";

const InputGenderAddBaby: React.FC = () => {
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
            onClick={() => setChouse(el.id)}
            isChose={chose === el.id}
          />
        ))}
      </div>
    </>
  );
};

export default InputGenderAddBaby;
