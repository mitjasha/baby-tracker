import React, { useState, useEffect } from "react";
import cn from "classnames";
import classes from "./FeedingScreen.module.css";
import FeedingButtonContainer from "../../common/FeedingButtonContainer/FeedingButtonContainer";
import { FeedingButtonConst } from "../../common/FeedingButtonContainer/FeedingButtonContainerConst";
import ModalWindow from "../../common/ALLModalEdit/ModalWindow/ModalWindow";
import Timer from "../../common/Timer/Timer";
import ModalAddActivity from "../../common/ALLModalEdit/ModalAddActivity/ModalAddActivity";
import { IChild, IEventResponse } from "../../../api/api.interface";
import childController from "../../../api/childController";
import eventController from "../../../api/eventController";
import userController from "../../../api/userController";
import Timeline from "../../common/Timeline/Timeline";

const FeedingScreen: React.FC = () => {
  let childID: string = JSON.parse(
    localStorage.getItem("currentChild") as string,
  );
  const getChild = async (): Promise<IChild[]> => {
    const result = await userController.getUser();
    return result.user.childs;
  };

  const [events, eventsSet] = useState<IEventResponse[]>();
  useEffect(() => {
    const setData = async () => {
      if (!childID) {
        const childs = await getChild();
        childID = childs[0].id;
      }
      const currentChild = await childController.getChildById(childID);
      const eventsList = await eventController.getAllEvents(currentChild);
      eventsSet(eventsList.filter((el) => el.event === "Кормление"));
    };

    setData();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataActive, setDataActive] = useState<string>("");
  const [addData, setAddData] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>("");

  const toggleModal = (arg: string | undefined) => {
    setIsModalOpen(!isModalOpen);
    if (arg) {
      const newIcon = FeedingButtonConst.filter((el) => el.text === arg)
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

  const modalFalse = () => {
    setIsModalOpen(false);
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
              id={dataActive}
              className="open"
              withFooter={false}
              withIcon
              iconImg={icon}
              titleModal={dataActive}
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
      {dataActive.includes("Бутылочка") && (
        <ModalAddActivity
          closeModalDefault={modalFalse}
          whatActivity={dataActive}
        />
      )}
      {events && <Timeline events={events as IEventResponse[]}></Timeline>}
    </div>
  );
};

export default FeedingScreen;
