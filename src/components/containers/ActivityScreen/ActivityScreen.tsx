import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
import classes from "./ActivityScreen.module.css";
import ActivityButtonContainer from "../../common/ActivityButtonContainer/ActivityButtonContainer";
import ModalWindow from "../../common/ModalWindow/ModalWindow";
import InputTimeDate from "../../common/Inputs/InputTimeDate/InputTimeDate";
import ActivityScreenConst from "./ActivityScreenConst";
import Timer from "../../common/Timer/Timer";
import InputFeeling from "../../common/Inputs/InputFeeling/InputFeeling";
import girlDefault from "../../../assets/png/activity/girl-default.png";
import { currentDay, currentTime } from "../../helpers/changeNum";

interface ISleepData {
  [key: string]: string;
}

const ActivityScreen: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataActive, setDataActive] = useState<string>("");
  const [addData, setAddData] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>("");
  const [img, setImg] = useState<string>(girlDefault);

  const toggleModal = (arg: string | undefined) => {
    setIsModalOpen(!isModalOpen);
    if (arg) {
      const newIcon = ActivityScreenConst.filter((el) => el.text === arg)
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
    getValues,
  } = useForm<ISleepData>({ mode: "onBlur" });

  const [minDate, setDateMin] = useState(getValues("startDate"));
  const [maxDate, setDateMax] = useState(getValues("endDate"));
  const [minTime, setTimeMin] = useState(getValues("startTime"));
  const [maxTime, setTimeMax] = useState(getValues("endTime"));
  useEffect(() => {
    setDateMin(getValues("startDate"));
    setDateMax(getValues("endDate"));
    setTimeMin(getValues("startTime"));
    setTimeMax(getValues("endTime"));
  }, [minDate, maxDate, minTime, maxTime]);
  const change = () => {
    setDateMin(getValues("startDate"));
    setDateMax(getValues("endDate"));
    setTimeMin(getValues("startTime"));
    setTimeMax(getValues("endTime"));
    console.log(minTime);
    console.log(maxTime);
    console.log(maxTime < minTime);
  };

  const onSubmit = (data: ISleepData) => {
    const dataEvent = {
      event: dataActive,
      startTime: `${data.startDate} ${data.startTime}`,
      endTime: `${data.endDate} ${data.endTime}`,
      description: "",
    };
    console.log(JSON.stringify(dataEvent));
    setAddData(!addData);
    setIsModalOpen(!isModalOpen);
    reset();
  };

  const onSubmitFeeling = (data: ISleepData) => {
    const time = `${currentDay} ${currentTime}`;
    const dataEvent = {
      event: dataActive,
      startTime: time,
      endTime: time,
      description: data.feeling[0].split(",")[1], // data.feeling = ["англ, русск"]
    };
    console.log(JSON.stringify(dataEvent));
    reset();
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    if (addData) {
      setIsModalOpen(!isModalOpen);
      setAddData(!addData);
    } else {
      setIsModalOpen(!isModalOpen);
    }
    reset();
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
            onClose={closeModal}
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
                type: "submit",
                text: "Сохранить",
                form: "form-active",
              }}
              onClose={closeModal}
            >
              <div>
                <form id="form-active" onSubmit={handleSubmit(onSubmit)}>
                  <InputTimeDate
                    max={maxDate}
                    maxTime={maxTime}
                    textName="Начало"
                    onChange={change}
                    classNameError={
                      (errors?.startDate || errors?.startTime) && classes.error
                    }
                    registerDate={register("startDate", { required: true })}
                    registerTime={register("startTime", { required: true })}
                  />
                  <InputTimeDate
                    min={minDate}
                    minTime={minTime}
                    onChange={change}
                    textName="Конец"
                    classNameError={
                      (errors?.endDate || errors?.endTime) && classes.error
                    }
                    registerDate={register("endDate", { required: true })}
                    registerTime={register("endTime", { required: true })}
                  />
                </form>
              </div>
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
            type: "submit",
            form: "form-feeling",
          }}
          onClose={closeModal}
        >
          <div>
            <form id="form-feeling" onSubmit={handleSubmit(onSubmitFeeling)}>
              <InputFeeling
                classNameError={errors?.feeling && classes.error}
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
