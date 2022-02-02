import React, { useState } from "react";
import cn from "classnames";
import classes from "./Timer.module.css";

interface ITimerState {
  stateTimer: number | undefined;
}
interface ITimer {
  classWrap?: string;
  classNameTimer?: string;
  classNameValue?: string;
  withClick: boolean;
}
const Timer: React.FC<ITimer> = ({
  classNameTimer,
  classNameValue,
  classWrap,
  withClick,
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

  return (
    <div className={classWrap}>
      <button
        onClick={() => {
          if (withClick) {
            const startTime = Date.now();
            if (timer.stateTimer) {
              clearInterval(timer.stateTimer);
              setTimer({ stateTimer: undefined });
            } else {
              setTimer({
                stateTimer: window.setInterval(
                  () => stopwatchCurrent(startTime),
                  1000,
                ),
              });
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
      <div className={cn(classes.value, classNameValue)}>
        {hours === 0 ? "" : `${hours < 10 ? `0${hours}:` : `${hours}:`}`}
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </div>
    </div>
  );
};

export default Timer;
