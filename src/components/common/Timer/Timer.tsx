import React, { useEffect, useState } from "react";
import cn from "classnames";
import classes from "./Timer.module.css";
import eventController from "../../../api/eventController";
import { IChild, IEventRequest } from "../../../api/api.interface";
import getTimerID from "../../helpers/getTmerID";

export interface ITimerState {
  stateTimer: number | undefined;
}

export interface ITimer {
  classWrap?: string;
  classNameTimer?: string;
  classNameValue?: string;
  eventType?: string;
  eventTypeDisplay?: boolean;
  child?: IChild;
  startTimeValue?: string;
  startTimer?: boolean;
  withClick: boolean;
  click?: () => void;
}

const Timer: React.FC<ITimer> = ({
  classNameTimer,
  classNameValue,
  classWrap,
  eventType,
  eventTypeDisplay,
  child,
  startTimeValue,
  startTimer,
  withClick,
  click,
}) => {
  const [hours, setHours] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);
  const [timer, setTimer] = useState<ITimerState>({ stateTimer: undefined });

  const stopwatchCurrent = (startTime: number): void => {
    const currentTime = Date.now() - startTime;
    setHours(Math.floor(currentTime / 3600000) % 60);
    setMin(Math.floor(currentTime / 60000) % 60);
    setSec(Math.floor((currentTime / 1000) % 60));
  };

  const [timerId, timerIdSet] = useState<string>("");

  useEffect(() => {
    if (startTimer === true) {
      if (startTimeValue) {
        setTimer({
          stateTimer: window.setInterval(
            () => stopwatchCurrent(Date.parse(startTimeValue)),
            1000,
          ),
        });
      }
    }
  }, []);

  return (
    <div className={classWrap} onClick={click}>
      <button
        onClick={() => {
          if (withClick) {
            const startTime = Date.now();
            if (timer.stateTimer) {
              getTimerID(child as IChild, timerIdSet);

              console.log(timerId);
              eventController.updateEvent({
                id: timerId,
                endTime: new Date(),
                description: "",
              } as IEventRequest);
              clearInterval(timer.stateTimer);

              setTimer({ stateTimer: undefined });
            } else {
              setTimer({
                stateTimer: window.setInterval(
                  () => stopwatchCurrent(startTime),
                  1000,
                ),
              });
              eventController.addEvent(
                {
                  event: eventType as string,
                  startTime: new Date(startTime),
                  endTime: new Date(startTime),
                  description: "Process",
                },
                child?.id as string,
              );
              getTimerID(child as IChild, timerIdSet);
            }
          }
        }}
      >
        <div
          className={cn(
            classes.timer,
            timer.stateTimer ? classes.styleFast : classes.styleSlow,
            classNameTimer,
          )}
        ></div>
      </button>
      <div className={cn(classes.valueName, classNameValue)}>{`${
        eventTypeDisplay ? eventType : ""
      }`}</div>
      <div className={cn(classes.value, classNameValue)}>
        {hours === 0 ? "" : `${hours < 10 ? `0${hours}:` : `${hours}:`}`}
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </div>
    </div>
  );
};

export default Timer;
