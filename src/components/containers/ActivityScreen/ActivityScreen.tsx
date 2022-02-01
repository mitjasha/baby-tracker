import React, { MouseEvent, useState } from "react";
import cn from "classnames";
import classes from "./ActivityScreen.module.css";
import ActivityButtonContainer from "../../common/ActivityButtonContainer/ActivityButtonContainer";
import ModalWindow from "../../common/ModalWindow/ModalWindow";
import InputTimeDate from "../../common/Inputs/InputTimeDate/InputTimeDate";
import { ActivityButtonConst } from "../../common/ActivityButtonContainer/ActivityButonConst";

const ActivityScreen: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataActive, setDataActive] = useState<string | undefined>("");
  const [icon, setIcon] = useState<string>("");

  const toggleModal = (event: MouseEvent): void => {
    const target = event.currentTarget as HTMLElement;
    if (target.hasAttribute("data-id")) {
      const newActive = target.dataset.id;
      const newIcon = ActivityButtonConst.filter((el) => el.text === newActive)
        .map((el) => el.icon)
        .join("");
      console.log(newIcon);
      setDataActive(newActive);
      setIcon(newIcon);
    }
    setIsModalOpen(!isModalOpen);
  };

  const saveData = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className={cn("screen", classes.container)}>
        <ActivityButtonContainer onClick={toggleModal} />
        {dataActive && (
          <ModalWindow
            className={`${isModalOpen ? "open" : "close"}`}
            withFooter
            withIcon
            iconImg={icon}
            titleModal={dataActive}
            primaryBtn={{
              text: "Сохранить",
              onClick: saveData,
            }}
            onClose={toggleModal}
          >
            <InputTimeDate className="" textName="Начало" />
            <InputTimeDate className="" textName="Конец" />
          </ModalWindow>
        )}
      </div>
    </>
  );
};

export default ActivityScreen;
