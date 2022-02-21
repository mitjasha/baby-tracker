import React, { FC } from "react";
import classes from "./ActivityButtonContainer.module.css";
import ButtonChoseActivity from "../Buttons/ButtonChoseActivity/ButtonChoseActivity";
import { ActivityButtonConst } from "./ActivityButtonConst";

interface IActivityButtonContainer {
  onClick: Function;
}

const ActivityButtonContainer: FC<IActivityButtonContainer> = ({ onClick }) => (
  <div className={classes.container}>
    {ActivityButtonConst.map((el, ind) => (
      <ButtonChoseActivity
        onClick={() => onClick([el.text, el.id])}
        key={el.id + ind}
        text={el.text}
        imgUrl={el.icon}
      />
    ))}
  </div>
);

export default ActivityButtonContainer;
