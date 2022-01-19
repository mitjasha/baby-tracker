import React, { useState } from "react";
import "./Timer.css";

interface ITimerState {
  stateTimer: number | undefined;
}
const Timer: React.FC = () => {
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

  const styleSlow = { animation: "circle 15s linear infinite" };
  const styleFast = { animation: "circle 5s linear infinite" };

  return (
    <>
      <button
        onClick={() => {
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
        }}
      >
        <div
          className="timer"
          style={timer.stateTimer ? styleFast : styleSlow}
        ></div>
      </button>
      <div className="timer-value">
        {hours === 0 ? "" : `${hours < 10 ? `0${hours}:` : `${hours}:`}`}
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </div>
    </>
  );
};

export default Timer;
