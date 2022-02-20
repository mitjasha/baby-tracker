/* eslint-disable global-require */
import React, { useEffect, useState } from "react";
import { IChild, IEventResponse } from "../../../api/api.interface";
import childController from "../../../api/childController";
import eventController from "../../../api/eventController";
import userController from "../../../api/userController";
import MainScreenButton from "../../common/Buttons/MainScreenButton/MainScreenButton";
import NewEventButton from "../../common/Buttons/NewEventButton/NewEventButton";
import Timeline from "../../common/Timeline/Timeline";
import Timer from "../../common/Timer/Timer";
import "./MainScreen.css";
// eslint-disable-next-line import/order
import moment from "moment";
// import getTimerID from "../../helpers/getTmerID";

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
    return eventsList.find((elem) => elem.id === timerID);
  }

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div className="screen main-screen">
        <div className="main-screen-up-container">
          <div className="main-screen-info">
            <h1 style={{ display: "none" }}>Baby Tracker</h1>

            <div className="title">{getAge(String(child.birth))}</div>
            <div className="main-screen-info-description">
              <div className="weight">
                {`Масса тела: 
                  ${getDescription(events, "Вес")} кг`}
              </div>
              <div className="height">
                {`Рост: ${getDescription(events, "Рост")} см`}
              </div>
            </div>
          </div>
          <div className="main-screen-timer-container">
            <div className="timer-wrap">
              {!timerId ? (
                <div>
                  <Timer
                    withClick
                    eventType="Сон"
                    eventTypeDisplay={true}
                    child={child}
                    click={() => {}}
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
        </div>
        <div>
          <div className="button-wrapper">
            <div className="main-buttons-container">
              <MainScreenButton className="main-screen-bnt-left">
                <div className="main-screen-bnt-icon">
                  <img
                    src={
                      require("../../../assets/svg/sleeping-icon.svg").default
                    }
                    alt="sleeping"
                  />
                </div>
                <div className="main-screen-btn-text-left">
                  <p>Добавить</p> <p>сон</p>
                </div>
              </MainScreenButton>
              <MainScreenButton className="main-screen-bnt-right">
                <div className="main-screen-btn-text-right">
                  <p>Добавить</p> <p>кормление</p>
                </div>
                <div className="main-screen-bnt-icon">
                  <img
                    src={require("../../../assets/svg/bottle-icon.svg").default}
                    alt="feeding"
                  />
                </div>
              </MainScreenButton>
            </div>
          </div>

          <div className="main-screen-timeline">
            {events && (
              <Timeline events={events as IEventResponse[]}></Timeline>
            )}
          </div>
          <div className="main-screen-add-activity">
            <NewEventButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
