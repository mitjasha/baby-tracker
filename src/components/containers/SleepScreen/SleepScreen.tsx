/* eslint-disable global-require */
import React, { useState} from "react";
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
import ModalWindow from "../../common/ModalWindow/ModalWindow";




const SleepScreen: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  console.log(isModalOpen);

  return (
  <div className={classes.sleepScreen}>
    <div className={classes.babyContainer}>
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
    </div>
    <NewSleepButton className = {`btn-sleep ${isModalOpen  ? "open": "close"}`} onClick = {toggleModal} text = {""}/>
    <ModalWindow className = {`${isModalOpen  ? "open": "close"}`} withFooter = {true} onClose={toggleModal}>
      <div>FFF</div>
    </ModalWindow>
  </div>
  );
};

export default SleepScreen;
