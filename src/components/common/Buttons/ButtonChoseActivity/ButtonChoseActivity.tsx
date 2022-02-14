import React, { MouseEvent } from "react";
import cn from "classnames";
import classes from "./ButtonChoseActivity.module.css";

type IButtonChoseActivity = {
  onClick: (event: MouseEvent) => void;
  text: string;
  classNameBtn?: string;
  classNameIcon?: string;
  classNameImg?: string;
  classNameText?: string;
  imgUrl: string;
};

const ButtonChoseActivity: React.FC<IButtonChoseActivity> = ({
  onClick,
  text,
  classNameBtn,
  classNameIcon,
  classNameImg,
  classNameText,
  imgUrl,
}) => (
  <div>
    <button className={cn(classes.button, classNameBtn)} onClick={onClick}>
      <div className={cn(classes.icon, classNameIcon)}>
        <img className={cn(classes.img, classNameImg)} src={imgUrl} alt="" />
      </div>
      <div>
        <p className={cn(classes.text, classNameText)}>{text}</p>
      </div>
    </button>
  </div>
);

export default ButtonChoseActivity;
