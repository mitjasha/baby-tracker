import React, { useState } from "react";
import cn from "classnames";
import ProgressBar from "../../common/ProgressBar/ProgressBar";
import Timer from "../../common/Timer/Timer";
import classes from "./SleepScreen.module.css";
import {
  sleepingTime,
  progressBarValue,
  notesSize,
  IndexInterfaceNumb,
} from "./sleepScreenConst";
import NewSleepButton from "../../common/Buttons/NewSleepButton/NewSleepButton";
import NotesOfSleep from "../../common/NotesOfSleep/NotesOfSleep";
import girlSleep from "../../../assets/png/girl.png";
import ModalAddActivity from "../../common/ALLModalEdit/ModalAddActivity/ModalAddActivity";

const SleepScreen: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = (): void => {
    console.log(isModalOpen);
    if (isModalOpen) {
      setIsModalOpen(false);
    }
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  };
  return (
    <>
      <div className={cn("screen", classes.sleepScreen)}>
        <div className={classes.babyContainer}>
          <div className={classes.baby}>
            {notesSize.map((el: IndexInterfaceNumb) => (
              <NotesOfSleep num={el.size} key={el.size} />
            ))}
            <img className={classes.babySleep} src={girlSleep} alt="baby" />
            <div className={classes.timer}>
              <Timer withClick />
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
        <NewSleepButton
          className={cn("btn-sleep")}
          onClick={toggleModal}
          text={""}
        />
        {isModalOpen && (
          <ModalAddActivity
            whatActivity={"Сон"}
            closeModalDefault={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default SleepScreen;
