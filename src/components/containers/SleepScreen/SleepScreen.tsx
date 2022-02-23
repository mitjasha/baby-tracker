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
import { IEventResponse } from "../../../api/api.interface";
import getEventsChild from "../../helpers/getEventsChild";
import Timeline from "../../common/Timeline/Timeline";
import getEventsSort from "../../helpers/getEventSort";
import { currentDate } from "../../helpers/changeNum";
import {
  nightSleepDuration,
  daySleepDuration,
} from "../../helpers/sleepDurration";
// import ChartSleep from "../../common/Charts/ChartSleep/ChartSleep";

const SleepScreen: React.FC = () => {
  let events = getEventsChild("Сон");
  if (!events) {
    // eslint-disable-next-line no-param-reassign
    events = [
      {
        id: "",
        event: "",
        startTime: String(new Date()),
        endTime: String(Date.now()),
        description: "",
      },
    ];
  }
  const eventsSort = getEventsSort(events);
  const nightSleep = nightSleepDuration(eventsSort[`${currentDate}`]);
  const daySleep = daySleepDuration(eventsSort[`${currentDate}`]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = (): void => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
    setIsModalOpen(!isModalOpen);
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
              <Timer
                withClick
                classNameValue={classes.timerValue}
                classWrap={classes.wrapper}
              />
            </div>
          </div>
          <ProgressBar
            icon={classes.nightIcon}
            value={nightSleep[1]}
            max={progressBarValue.DEFAULT_MAX}
            classNameProgressBar={classes.night}
            classNameContainer={classes.progressBar}
            textName={sleepingTime.NIGHT_SLEEP}
            textValue={nightSleep[0]}
          />
          <ProgressBar
            icon={classes.dayIcon}
            value={daySleep[1]}
            max={progressBarValue.DEFAULT_MAX}
            classNameProgressBar={classes.day}
            classNameContainer={classes.progressBar}
            textName={sleepingTime.DAY_SLEEP}
            textValue={daySleep[0]}
          />
        </div>

        {events && (
          <div className={classes.timeline}>
            <Timeline events={events as IEventResponse[]} />
          </div>
        )}
        <NewSleepButton
          className={cn("btn-sleep")}
          onClick={toggleModal}
          text={""}
        />
        {isModalOpen && <ModalAddActivity whatActivity={["Сон", "sleep"]} />}
        {/* <ChartSleep /> */}
      </div>
    </>
  );
};

export default SleepScreen;
