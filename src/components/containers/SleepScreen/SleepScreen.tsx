import React from "react";
import ProgressBar from "../../common/ProgressBar/ProgressBar";
import Timer from "../../common/Timer/Timer";
import "./SleepScreen.css";

const SleepScreen: React.FC = () => (
  <div className="screen">Sleep Screen
   <div className="timer-container-sleep-screen">
      <Timer />
    </div>
    <ProgressBar 
    icon = "night-icon"
    value = "60"
    max = "100"
    classNameProgressBar = "sleep-night-progress"
    classNameContainer = "progress-bar-container"
    textName = "Ночной сон" 
    textValue = "3 ч 30 м"
    />
    <ProgressBar
    icon = "day-icon"
    value = "30"
    max = "100"
    classNameProgressBar ="sleep-day-progress"
    classNameContainer = "progress-bar-container"
    textName = "Дневной сон"
    textValue = "1 ч 30 м"
    />
</div>

);

export default SleepScreen;
