import React from "react";
import cn from "classnames";
import classes from "./ActivityScreen.module.css";
import ButtonChoseActivity from "../../common/Buttons/ButtonChoseActivity/ButtonChoseActivity";
import logo from "../../../assets/svg/baby-cariagge-icon.svg";

const ActivityScreen: React.FC = () => {
  const clickBtn = () => console.log("click");
  return (
    <>
      <div className={cn("screen", classes.container)}>
        <ButtonChoseActivity text="dssss" onClick={clickBtn} imgUrl={logo} />
      </div>
    </>
  );
};

export default ActivityScreen;
