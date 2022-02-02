import React, { FC, MouseEvent } from "react";
import classes from "./ActivityButtonContainer.module.css";
import ButtonChoseActivity from "../Buttons/ButtonChoseActivity/ButtonChoseActivity";
import { ActivityButtonConst } from "./ActivityButtonConst";

interface IActivityButtonContainer {
  onClick: (event: MouseEvent) => void;
}

const ActivityButtonContainer: FC<IActivityButtonContainer> = ({ onClick }) => (
  <div className={classes.container}>
    {ActivityButtonConst.map((el, ind) => (
      <ButtonChoseActivity
        idButton={el.text}
        onClick={onClick}
        key={ind}
        text={el.text}
        imgUrl={el.icon}
      />
    ))}
  </div>
);

export default ActivityButtonContainer;
