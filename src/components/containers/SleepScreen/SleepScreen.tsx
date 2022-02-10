import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
import ModalWindow from "../../common/ModalWindow/ModalWindow";
import InputTimeDate from "../../common/Inputs/InputTimeDate/InputTimeDate";
import iconSleep from "../../../assets/png/icon-sleep.png";
import girlSleep from "../../../assets/png/girl.png";

interface IsleepTime {
  startTimeSleep: string;
  endTimeSleep: string;
  startDateSleep: string;
  endDateSleep: string;
}

const SleepScreen: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = (): void => setIsModalOpen(!isModalOpen);

  const { register, handleSubmit } = useForm<IsleepTime>();
  const onSubmit = (data: IsleepTime) => {
    toggleModal();
    console.log(data);
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
          className={cn(`btn-sleep ${isModalOpen ? "open" : "close"}`, "")}
          onClick={toggleModal}
          text={""}
        />

        <ModalWindow
          id={"Сон"}
          className={`${isModalOpen ? "open" : "close"}`}
          withFooter={true}
          onClose={toggleModal}
          withIcon
          iconImg={iconSleep}
          titleModal={"Добавить сон"}
          primaryBtn={{ type: "submit", text: "Сохранить", form: "form-sleep" }}
        >
          <form id="form-sleep" onSubmit={handleSubmit(onSubmit)}>
            <InputTimeDate
              textName="Начало"
              registerDate={register("startDateSleep")}
              registerTime={register("startTimeSleep")}
            />
            <InputTimeDate
              textName="Конец"
              registerDate={register("endDateSleep")}
              registerTime={register("endTimeSleep")}
            />
          </form>
        </ModalWindow>
      </div>
    </>
  );
};

export default SleepScreen;
