import React, { useState } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
import classes from "./ActivityScreen.module.css";
import ActivityButtonContainer from "../../common/ActivityButtonContainer/ActivityButtonContainer";
import ModalWindow from "../../common/ALLModalEdit/ModalWindow/ModalWindow";
import Timer from "../../common/Timer/Timer";
import InputFeeling from "../../common/Inputs/InputFeeling/InputFeeling";
import girlDefault from "../../../assets/png/activity/girl-default.png";
import boyDefault from "../../../assets/png/activity/boy-default.png";
import { currentDay, currentTime } from "../../helpers/changeNum";
import ModalAddActivity from "../../common/ALLModalEdit/ModalAddActivity/ModalAddActivity";
import { ModalAddActivityConst } from "../../common/ALLModalEdit/ModalAddActivity/ModalAddActivityConst";
import { IChild, IEventResponse } from "../../../api/api.interface";
import getEventsChild from "../../helpers/getEventsChild";
import Timeline from "../../common/Timeline/Timeline";
import { activityConstRu } from "../../helpers/getDescription";
import eventController from "../../../api/eventController";
import genderChange from "../../helpers/genderChange";

interface ISleepData {
  [key: string]: string;
}

const ActivityScreen: React.FC = () => {
  const events = getEventsChild(activityConstRu);
  const childID: string = JSON.parse(
    localStorage.getItem("currentChild") as string,
  );
  const currentChildInfo: IChild = JSON.parse(
    localStorage.getItem("currentChildInfo") as string,
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataActive, setDataActive] = useState<string[]>([]);
  const [addData, setAddData] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>("");
  const [img, setImg] = useState<string>(
    genderChange([girlDefault, boyDefault], currentChildInfo.gender),
  );

  const toggleModal = (arg: string[] | undefined) => {
    // console.log(arg);
    setIsModalOpen(!isModalOpen);
    if (arg) {
      const newIcon = ModalAddActivityConst.filter((el) => el.text === arg[0])
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
      event: dataActive[0],
      startTime: new Date(time),
      endTime: new Date(time),
      description: data.feeling[0].split(",")[1], // data.feeling = ["англ, русск"]
    };
    console.log(JSON.stringify(dataEvent));
    eventController.addEvent(dataEvent, childID);
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

  const changeImg = (gender: string) => {
    const newImg = ModalAddActivityConst.filter(
      (el) => el.text === dataActive[0],
    )
      .map((el) => genderChange(el.img as string[], gender))
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
          <img className={classes.img} src={img} alt={dataActive[1]} />
        </div>
        <ActivityButtonContainer onClick={toggleModal} />
      </section>
      <div className={classes.timeline}>
        {events && <Timeline events={events as IEventResponse[]}></Timeline>}
      </div>
      {dataActive[1] !== "feeling" && (
        <>
          {isModalOpen && (
            <ModalWindow
              id={dataActive[1]}
              className={`${isModalOpen ? "open" : "close"}`}
              withFooter
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
                click={() => changeImg(currentChildInfo.gender)}
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
      {dataActive[1] === "feeling" && (
        <ModalWindow
          id={dataActive[1]}
          className={`${isModalOpen ? "open" : "close"}`}
          withFooter
          withIcon
          iconImg={icon}
          titleModal={dataActive[0]}
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
                gender={currentChildInfo.gender}
              />
            </form>
          </div>
        </ModalWindow>
      )}
    </div>
  );
};

export default ActivityScreen;
