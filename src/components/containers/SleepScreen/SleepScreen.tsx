/* eslint-disable global-require */
import React from "react";
import ProgressBar from "../../common/ProgressBar/ProgressBar";
import Timer from "../../common/Timer/Timer";
import classes from "./SleepScreen.module.css";
import {
  sleepingTime,
  progressBarValue,
  notesSize,
} from "./sleepScreenConst";
import NewSleepButton from "../../common/NewSleepButton/NewSleepButton";
import NotesOfSleep from "../../common/NotesOfSleep/NotesOfSleep";


const SleepScreen: React.FC = () => (
  <div className={classes.sleepScreen}>
    <div className={classes.baby}>
      <NotesOfSleep num={notesSize.FIRST_NOTE_SIZE} />
      <NotesOfSleep num={notesSize.SECOND_NOTE_SIZE} />
      <NotesOfSleep num={notesSize.THIRD_NOTE_SIZE} />
      <img
        className={classes.babySleep}
        src={require("../../../assets/png/girl.png")}
        alt="baby"
      />
      <div className={classes.timer}>
        <Timer />
      </div>
    </div>
    <ProgressBar
      icon={classes.nightIcon}
      value="60"
      max={progressBarValue.DEFAULT_MAX}
      classNameProgressBar={classes.night}
      classNameContainer={classes.progressBar}
      textName={sleepingTime.NIGHT_SLEEP}
      textValue="8 ч 30 м"
    />
    <ProgressBar
      icon={classes.dayIcon}
      value="30"
      max={progressBarValue.DEFAULT_MAX}
      classNameProgressBar={classes.day}
      classNameContainer={classes.progressBar}
      textName={sleepingTime.DAY_SLEEP}
      textValue="1 ч 30 м"
    />
    <NewSleepButton />
  </div>
);

export default SleepScreen;
