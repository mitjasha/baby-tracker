import React, { useState } from "react";
import cn from "classnames";
import classes from "./FeedingScreen.module.css";
import FeedingButtonContainer from "../../common/FeedingButtonContainer/FeedingButtonContainer";
import { FeedingButtonConst } from "../../common/FeedingButtonContainer/FeedingButtonContainerConst";
import ModalWindow from "../../common/ALLModalEdit/ModalWindow/ModalWindow";
import Timer from "../../common/Timer/Timer";
import ModalAddActivity from "../../common/ALLModalEdit/ModalAddActivity/ModalAddActivity";

const FeedingScreen: React.FC = () => {
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
    </div>
  );
};

export default FeedingScreen;
