import React, { FC } from "react";
import classes from "./FeedingButtonContainer.module.css";
import ButtonChoseActivity from "../Buttons/ButtonChoseActivity/ButtonChoseActivity";
import { FeedingButtonConst } from "./FeedingButtonContainerConst";

interface IFeedingButtonContainer {
  onClick: Function;
}

const FeedingButtonContainer: FC<IFeedingButtonContainer> = ({ onClick }) => (
  <div className={classes.container}>
    {FeedingButtonConst.map((el, ind) => (
      <ButtonChoseActivity
        classNameBtn={classes.button}
        classNameIcon={classes.icon}
        onClick={() => onClick(el.text)}
        key={ind}
        text={el.text}
        imgUrl={el.icon}
      />
    ))}
  </div>
);

export default FeedingButtonContainer;
