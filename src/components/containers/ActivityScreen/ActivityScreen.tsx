import React, { MouseEvent, useState } from "react";
import cn from "classnames";
import classes from "./ActivityScreen.module.css";
import ActivityButtonContainer from "../../common/ActivityButtonContainer/ActivityButtonContainer";
import ModalWindow from "../../common/ModalWindow/ModalWindow";
import InputTimeDate from "../../common/Inputs/InputTimeDate/InputTimeDate";
import ActivityScreenConst from "./ActivityScreenConst";
import Timer from "../../common/Timer/Timer";
import InputFeeling from "../../common/Inputs/InputFeeling/InputFeeling";
import girlDefault from "../../../assets/png/activity/girl-default.png";

const ActivityScreen: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataActive, setDataActive] = useState<string | undefined>("");
  const [addData, setAddData] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>("");
  const [img, setImg] = useState<string>(girlDefault);

  const toggleModal = (event: MouseEvent): void => {
    setIsModalOpen(!isModalOpen);
    const target = event.currentTarget as HTMLElement;
    if (target.hasAttribute("data-id")) {
      const newActive = target.dataset.id;
      const newIcon = ActivityScreenConst.filter((el) => el.text === newActive)
        .map((el) => el.icon)
        .join("");

      setDataActive(newActive);
      setIcon(newIcon);
    }
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
    setAddData(!addData);
  };

  const saveData = () => {
    console.log("Save DATA");
    setAddData(!addData);
    setIsModalOpen(!isModalOpen);
  };

  const addNewData = () => {
    setAddData(!addData);
  };

  const changeImg = () => {
    const newImg = ActivityScreenConst.filter((el) => el.text === dataActive)
      .map((el) => el.img)
      .join("");
    setImg(newImg);
  };

  return (
    <div className={cn("screen", classes.container)}>
      <section className={cn(classes.containerBtn)}>
        <div className={cn(classes.imgTimer)}>
          <Timer
            withClick={false}
            classWrap={classes.wrapper}
            classNameTimer={classes.timer}
            classNameValue={classes.valueTime}
          />
          <img className={classes.img} src={img} alt={dataActive} />
        </div>
        <ActivityButtonContainer onClick={toggleModal} />
      </section>
      {dataActive !== "Настроение" && (
        <>
          <ModalWindow
            id={dataActive}
            className={`${isModalOpen ? "open" : "close"}`}
            withFooter
            withIcon
            iconImg={icon}
            titleModal={dataActive}
            primaryBtn={{
              text: "+ Добавить",
              onClick: addNewData,
            }}
            onClose={toggleModal}
          >
            <Timer
              click={changeImg}
              withClick
              classWrap={classes.timerWrapper}
              classNameTimer={classes.timerModal}
              classNameValue={classes.valueTimer}
            />
          </ModalWindow>
          {addData && (
            <ModalWindow
              id={dataActive}
              className={`${isModalOpen ? "open" : "close"}`}
              withFooter
              withIcon
              iconImg={icon}
              titleModal={dataActive}
              primaryBtn={{
                text: "Сохранить",
                onClick: saveData,
              }}
              onClose={closeModal}
            >
              <InputTimeDate className="" textName="Начало" />
              <InputTimeDate className="" textName="Конец" />
            </ModalWindow>
          )}
        </>
      )}
      {dataActive === "Настроение" && (
        <ModalWindow
          id={dataActive}
          className={`${isModalOpen ? "open" : "close"}`}
          withFooter
          withIcon
          iconImg={icon}
          titleModal={dataActive}
          primaryBtn={{
            text: "Сохранить",
            onClick: toggleModal,
          }}
          onClose={toggleModal}
        >
          <InputFeeling />
        </ModalWindow>
      )}
    </div>
  );
};

export default ActivityScreen;
