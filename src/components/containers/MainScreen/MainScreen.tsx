/* eslint-disable global-require */
import React, { useEffect, useState } from "react";
import cn from "classnames";
import moment from "moment";
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

  const plural = require("plural-ru");

  const [events, eventsSet] = useState<IEventResponse[]>(
    [] as IEventResponse[],
  );
  const [child, childSet] = useState<IChild>({} as IChild);
  const [timerId, timerIdSet] = useState<string>("");

  const getChild = async (): Promise<IChild[]> => {
    const result = await userController.getUser();

    return result.user.childs;
  };

  function getAge(dateString: string) {
    const year = moment().diff(new Date(dateString), "year");
    const month = moment().diff(new Date(dateString), "month");
    const day = moment().diff(new Date(dateString), "day");

    const monthDisplay = month - year * 12;
    const dayDisplay = day - year * 365 - monthDisplay * 30;

    return `${year > 0 ? plural(year, "%d год", "%d года", "%d лет") : ""} 
    ${
      monthDisplay > 0
        ? plural(monthDisplay, "%d месяц", "%d месяца", "%d месяцев")
        : ""
    }
     ${year > 0 ? "" : plural(dayDisplay, "%d день", "%d дня", "%d дней")}`;
  }

  function getDescription(eventsList: IEventResponse[], el: string) {
    return eventsList
      .sort((a, b) => Date.parse(b.startTime) - Date.parse(a.startTime))
      .find((elem) => elem.event === el)?.description;
  }

  function timerLoader(eventsList: IEventResponse[], timerID: string) {
    localStorage.setItem(
      "timerLoader",
      JSON.stringify(eventsList.find((elem) => elem.id === timerID)),
    );
    return eventsList.find((elem) => elem.id === timerID);
  }

  useEffect(() => {
    const ac = new AbortController();
    const setData = async () => {
      if (!childID) {
        const childs = await getChild();
        childID = childs[0].id;
      }
      const currentChild = await childController.getChildById(childID);
      const eventsList = await eventController.getAllEvents(currentChild);
      const id = eventsList.find((elem) => elem.description === "Process")
        ?.id as string;

      timerIdSet(id);

      childSet(currentChild as IChild);
      eventsSet(eventsList);
    };

    setData();
    return () => ac.abort();
  }, []);

  useEffect(() => {
    if (timerId) {
      localStorage.setItem("timerId", JSON.stringify(timerId));
    }
  }, [timerId]);

  return (
    <div className={cn(classes.screen)}>
      <div className={classes.upContainer}>
        <div className={classes.info}>
          <h1 style={{ display: "none" }}>Baby Tracker</h1>

          <div className={classes.title}>{getAge(String(child.birth))}</div>
          <div className={classes.description}>
            <div className={classes.weight}>
              {`Вес: 
                  ${getDescription(events, "Вес")} кг`}
            </div>
            <div className={classes.height}>
              {`Рост: ${getDescription(events, "Рост")} см`}
            </div>
          </div>
        </div>
        <div className={classes.timerContainer}>
          <div className={classes.timerWrap}>
            {!timerId ? (
              <div>
                <Timer
                  withClick
                  eventType="Сон"
                  eventTypeDisplay={true}
                  child={child}
                  click={() => {}}
                  classNameValue={classes.value}
                />
              </div>
            ) : (
              <div>
                <Timer
                  withClick
                  eventType={timerLoader(events, timerId)?.event}
                  eventTypeDisplay={true}
                  child={child}
                  startTimeValue={timerLoader(events, timerId)?.startTime}
                  startTimer={true}
                  click={() => {}}
                />
              </div>
            )}
          </div>
        </div>

        <div className={classes.buttonWrapper}>
          <div className={classes.buttonsContainer}>
            <MainScreenButton
              eventName={["Сон", "sleep"]}
              className={classes.bntLeft}
            >
              <div className={classes.bntIcon}>
                <img
                  src={require("../../../assets/svg/sleeping-icon.svg").default}
                  alt="sleeping"
                />
              </div>
              <div className={classes.btnTextLeft}>
                <p>Добавить</p> <p>сон</p>
              </div>
            </MainScreenButton>
            <MainScreenButton
              eventName={["Кормление", "eat"]}
              className={classes.bntRight}
            >
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
          {events && <Timeline events={events as IEventResponse[]}></Timeline>}
        </div>
        <div className={classes.addActivity}>
          <NewEventButton />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
