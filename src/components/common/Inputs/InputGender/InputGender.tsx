import React, {useState} from "react";
import cn from "classnames";
import classes from "./InputGender.module.css";

interface IInputGender {
  img: string;
  className?: string;
  textBaby: string;
  //  onClick: (event: MouseEvent) => void;
  id: string;
}

const InputGender: React.FC<IInputGender> = ({
  img,
  textBaby,
  className,
 // onClick,
  id,
}) => {
    const [chose, setChouse] = useState(false);
  const click = () => {
    setChouse(!chose);
    console.log(id);
  };

  return (
  <>
    <div className={cn(classes.gender, className, (chose ) ? classes.active: classes.disactive)} id={id} onClick={click}>
      <img className={cn(classes.baby)} src={img}></img>
      <div className={classes.title}>{textBaby}</div>
    </div>
  </>
);
};

export default InputGender;
