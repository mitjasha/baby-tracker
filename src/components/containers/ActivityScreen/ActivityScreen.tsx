import React, { useState } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
import classes from "./ActivityScreen.module.css";
import ActivityButtonContainer from "../../common/ActivityButtonContainer/ActivityButtonContainer";
import ModalWindow from "../../common/ALLModalEdit/ModalWindow/ModalWindow";
import Timer from "../../common/Timer/Timer";
import InputFeeling from "../../common/Inputs/InputFeeling/InputFeeling";
import girlDefault from "../../../assets/png/activity/girl-default.png";
import { currentDay, currentTime } from "../../helpers/changeNum";
import ModalAddActivity from "../../common/ALLModalEdit/ModalAddActivity/ModalAddActivity";
import ModalAddActivityConst from "../../common/ALLModalEdit/ModalAddActivity/ModalAddActivityConst";
import saveDataFromFormToLS from "../../helpers/saveDataFromFormLocalStorage";
import { IEventResponse } from "../../../api/api.interface";
import getEventsChild from "../../helpers/getEvemtsChild";
import Timeline from "../../common/Timeline/Timeline";

interface ISleepData {
  [key: string]: string;
}

const ActivityScreen: React.FC = () => {
  const events = getEventsChild("Активность");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataActive, setDataActive] = useState<string>("");
  const [addData, setAddData] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>("");
  const [img, setImg] = useState<string>(girlDefault);

  const toggleModal = (arg: string | undefined) => {
    setIsModalOpen(!isModalOpen);
    if (arg) {
      const newIcon = ModalAddActivityConst.filter((el) => el.text === arg)
        .map((el) => el.icon)
        .join("");
      setDataActive(arg);
      setIcon(newIcon);
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ISleepData>({ mode: "onChange" });

  const onSubmitFeeling = (data: ISleepData) => {
    const time = `${currentDay} ${currentTime}`;
    const dataEvent = {
      event: dataActive,
      startTime: time,
      endTime: time,
      description: data.feeling[0].split(",")[1], // data.feeling = ["англ, русск"]
    };
    console.log(JSON.stringify(dataEvent));
    saveDataFromFormToLS(dataActive, dataEvent);
    setIsModalOpen(!isModalOpen);
    reset();
  };

  const closeModal = () => {
    if (addData) {
      setAddData(!addData);
      setIsModalOpen(false);
    }
    setIsModalOpen(!isModalOpen);
    reset();
  };

  const addNewData = () => {
    setAddData(!addData);
  };

  const changeImg = () => {
    const newImg = ModalAddActivityConst.filter((el) => el.text === dataActive)
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
            classNameValue={classes.timerValue}
            classWrap={classes.wrapper}
          />
          <img className={classes.img} src={img} alt={dataActive} />
        </div>
        <ActivityButtonContainer onClick={toggleModal} />
      </section>
      {events && <Timeline events={events as IEventResponse[]}></Timeline>}
      {dataActive !== "Настроение" && (
        <>
          {isModalOpen && (
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
                className: classes.button,
              }}
              onClose={closeModal}
              withOverlay
            >
              <Timer
                click={changeImg}
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
            type: "submit",
            form: "form-feeling",
          }}
          onClose={closeModal}
          withOverlay
        >
          <div>
            <form id="form-feeling" onSubmit={handleSubmit(onSubmitFeeling)}>
              <InputFeeling
                classNameError={errors?.feeling && classes.errorFeeling}
                register={register("feeling", { required: true })}
              />
            </form>
          </div>
        </ModalWindow>
      )}
    </div>
  );
};

export default ActivityScreen;
