/* eslint-disable global-require */
import React from "react";
import ProgressBar from "../../common/ProgressBar/ProgressBar";
import Timer from "../../common/Timer/Timer";
import "./SleepScreen.css";
import {
  sleepScreenClasses,
  sleepingTime,
  progressBarValue,
  progressBarClasses,
  notesSize,
} from "./sleepScreenConst";
import NewSleepButton from "../../common/NewSleepButton/NewSleepButton";
import NotesOfSleep from "../../common/NotesOfSleep/NotesOfSleep";

const SleepScreen: React.FC = () => (
  <div className={sleepScreenClasses.MAIN_CLASS}>
    <div className={sleepScreenClasses.BABY_SLEEP_CONTAINER}>
      <NotesOfSleep num={notesSize.FIRST_NOTE_SIZE} />
      <NotesOfSleep num={notesSize.SECOND_NOTE_SIZE} />
      <NotesOfSleep num={notesSize.THIRD_NOTE_SIZE} />
      <img
        className={sleepScreenClasses.BABY_PICTURE_SLEEP}
        src={require("../../../assets/png/girl.png")}
        alt="baby"
      />
      <div className={sleepScreenClasses.TIMER_CONTAINER}>
        <Timer />
      </div>
    </div>
    <ProgressBar
      icon={progressBarValue.NIGHT_ICON_NAME}
      value="60"
      max={progressBarValue.DEFAULT_MAX}
      classNameProgressBar={progressBarClasses.SLEEP_NIGHT_CLASS}
      classNameContainer={progressBarClasses.MAIN_CONTAINER_ALL_PROGRESS}
      textName={sleepingTime.NIGHT_SLEEP}
      textValue="8 ч 30 м"
    />
    <ProgressBar
      icon={progressBarValue.DAY_ICON_NAME}
      value="30"
      max={progressBarValue.DEFAULT_MAX}
      classNameProgressBar={progressBarClasses.SLEEP_DAY_CLASS}
      classNameContainer={progressBarClasses.MAIN_CONTAINER_ALL_PROGRESS}
      textName={sleepingTime.DAY_SLEEP}
      textValue="1 ч 30 м"
    />
    <NewSleepButton
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
  </div>
);

export default SleepScreen;
