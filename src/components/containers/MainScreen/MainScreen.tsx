/* eslint-disable global-require */
import React, { useEffect, useState } from "react";
import { IEventResponse } from "../../../api/api.interface";
import eventController from "../../../api/eventController";
import MainScreenButton from "../../common/Buttons/MainScreenButton/MainScreenButton";
import NewEventButton from "../../common/Buttons/NewEventButton/NewEventButton";
import Timeline from "../../common/Timeline/Timeline";
import Timer from "../../common/Timer/Timer";
import "./MainScreen.css";

const MainScreen: React.FC = () => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken") as string);
  const child = JSON.parse(localStorage.getItem("currentChild") as string);
  const [events, eventsSet] = useState<IEventResponse[]>();
  useEffect(() => {
    const setData = async () => {
      const eventsList = await eventController.getAllEvents(child, accessToken);

      eventsSet(eventsList);
    };
    setData();
  }, []);

  return (
    <>
      <div className="screen main-screen">
        <div className="main-screen-up-container">
          <div className="main-screen-info">
            <h1 className="title">Baby Tracker</h1>
          </div>
          <div className="main-screen-timer-container">
            <div className="timer-wrap">
              <Timer withClick />
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
            <Timeline events={events as IEventResponse[]}></Timeline>
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
