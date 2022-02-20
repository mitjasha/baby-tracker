/* eslint-disable global-require */
import React, { useEffect, useState } from "react";
import cn from "classnames";
import classes from "./MainScreen.module.css";
import { IChild, IEventResponse } from "../../../api/api.interface";
import childController from "../../../api/childController";
import eventController from "../../../api/eventController";
import userController from "../../../api/userController";
import MainScreenButton from "../../common/Buttons/MainScreenButton/MainScreenButton";
import NewEventButton from "../../common/Buttons/NewEventButton/NewEventButton";
import Timeline from "../../common/Timeline/Timeline";
import Timer from "../../common/Timer/Timer";

const MainScreen: React.FC = () => {
  let childID: string = JSON.parse(
    localStorage.getItem("currentChild") as string,
  );
  const getChild = async (): Promise<IChild[]> => {
    const result = await userController.getUser();

    return result.user.childs;
  };

  const [events, eventsSet] = useState<IEventResponse[]>();
  // const [child, childSet] = useState<IChild>();
  // console.log("2 MainScreen ChildID = ", childID);
  useEffect(() => {
    const setData = async () => {
      if (!childID) {
        const childs = await getChild();
        childID = childs[0].id;
      }
      const currentChild = await childController.getChildById(childID);
      const eventsList = await eventController.getAllEvents(currentChild);

      // childSet(currentChild as IChild);
      eventsSet(eventsList);
    };

    setData();
  }, []);

  return (
    <>
      <div className={cn(classes.screen)}>
        <div className={classes.upContainer}>
          <div className={classes.info}>
            <h1 className={classes.title}>Baby Tracker</h1>
          </div>
          <div className={classes.timerContainer}>
            <div className={classes.timerWrap}>
              <Timer
                withClick
                click={() =>
                  eventController.addEvent(
                    {
                      event: "Сон",
                      startTime: new Date(),
                      endTime: new Date(),
                      description: "СОН",
                    },
                    childID,
                  )
                }
              />
            </div>
          </div>

          <div className={classes.buttonWrapper}>
            <div className={classes.buttonsContainer}>
              <MainScreenButton className={classes.bntLeft}>
                <div className={classes.bntIcon}>
                  <img
                    src={
                      require("../../../assets/svg/sleeping-icon.svg").default
                    }
                    alt="sleeping"
                  />
                </div>
                <div className={classes.btnTextLeft}>
                  <p>Добавить</p> <p>сон</p>
                </div>
              </MainScreenButton>
              <MainScreenButton className={classes.bntRight}>
                <div className={classes.btnTextRight}>
                  <p>Добавить</p> <p>кормление</p>
                </div>
                <div className={classes.bntIcon}>
                  <img
                    src={require("../../../assets/svg/bottle-icon.svg").default}
                    alt="feeding"
                  />
                </div>
              </MainScreenButton>
            </div>
          </div>
        </div>
        <div className={classes.timilineContainer}>
          <div className={classes.timeline}>
            {events && (
              <Timeline events={events as IEventResponse[]}></Timeline>
            )}
          </div>
          <div className={classes.addActivity}>
            <NewEventButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
