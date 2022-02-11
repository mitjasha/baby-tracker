import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import cn from "classnames";
import classes from "./InputGender.module.css";

interface IInputGender {
  img: string;
  className?: string;
  textBaby: string;
  onChange: () => void;
  id: string;
  isChose: boolean;
  register?: UseFormRegisterReturn;
}

const InputGender: React.FC<IInputGender> = ({
  img,
  textBaby,
  className,
  onChange,
  isChose,
  id,
  register,
}) => (
  <>
    <label
      className={cn(
        classes.gender,
        className,
        isChose ? classes.active : classes.disactive,
      )}
    >
      <input
        className={classes.input}
        type="checkbox"
        id={id}
        checked={isChose}
        onClick={onChange}
        value={[id, textBaby]}
        {...register}
      />
      <img className={cn(classes.baby)} src={img}></img>
      <div className={classes.title}>{textBaby}</div>
    </label>
  </>
);

export default InputGender;
