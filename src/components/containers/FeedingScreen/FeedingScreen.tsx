import React, { useState } from "react";
import cn from "classnames";
import classes from "./FeedingScreen.module.css";
import FeedingButtonContainer from "../../common/FeedingButtonContainer/FeedingButtonContainer";
import { FeedingButtonConst } from "../../common/FeedingButtonContainer/FeedingButtonContainerConst";
import ModalWindow from "../../common/ALLModalEdit/ModalWindow/ModalWindow";
import Timer from "../../common/Timer/Timer";
import ModalAddActivity from "../../common/ALLModalEdit/ModalAddActivity/ModalAddActivity";
import { feeding } from "../../common/ALLModalEdit/ModalAddActivity/ModalAddActivityConst";
import { IEventResponse } from "../../../api/api.interface";
import getEventsChild from "../../helpers/getEvemtsChild";
import Timeline from "../../common/Timeline/Timeline";

const FeedingScreen: React.FC = () => {
  const events = getEventsChild("Кормление");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataActive, setDataActive] = useState<string[]>([""]);
  const [addData, setAddData] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>("");

  const toggleModal = (arg: string[] | undefined) => {
    setIsModalOpen(true);
    if (arg) {
      const newIcon = FeedingButtonConst.filter((el) => el.text === arg[0])
        .map((el) => el.icon)
        .join("");
      setDataActive(arg);
      setIcon(newIcon);
    }
  };

  const closeModal = () => {
    if (addData) {
      setAddData(!addData);
      setIsModalOpen(false);
    }
    setIsModalOpen(!isModalOpen);
  };

  const addNewData = () => {
    setAddData(!addData);
  };

  return (
    <div className={cn("screen", classes.container)}>
      <section className={cn(classes.containerBtn)}>
        <FeedingButtonContainer onClick={toggleModal} />
      </section>
      {(dataActive.includes("Левая грудь") ||
        dataActive.includes("Правая грудь")) && (
        <>
          {isModalOpen && (
            <ModalWindow
              id={dataActive[1]}
              className="open"
              withFooter={false}
              withIcon
              iconImg={icon}
              titleModal={dataActive[0]}
              primaryBtn={{
                text: "+ Добавить",
                onClick: addNewData,
                className: classes.button,
              }}
              onClose={closeModal}
              withOverlay
            >
              <Timer
                withClick
                classWrap={classes.timerWrapper}
                classNameTimer={classes.timerModal}
                classNameValue={classes.valueTimer}
              />
            </ModalWindow>
          )}
          {addData && <ModalAddActivity whatActivity={dataActive} />}
        </>
      )}
      {feeding.includes(dataActive[0]) && (
        <ModalAddActivity whatActivity={dataActive} />
      )}
      {events && <Timeline events={events as IEventResponse[]}></Timeline>}
    </div>
  );
};

export default FeedingScreen;
