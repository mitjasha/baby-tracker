import React, { useEffect, useState } from "react";
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
  const [errorS, setErrors] = useState<boolean>(false);

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
  } = useForm<ISleepData>({ mode: "onChange" });

  const [minDate, setDateMin] = useState("");
  const [maxDate, setDateMax] = useState("");
  const [minTime, setTimeMin] = useState("");
  const [maxTime, setTimeMax] = useState("");
  const [errMessage, setErrMessage] = useState("");
  useEffect(() => {
    const startEvent = Date.parse(
      `${getValues("startDate")} ${getValues("startTime")}`,
    );
    const endEvent = Date.parse(
      `${getValues("endDate")} ${getValues("endTime")}`,
    );
    if (startEvent > endEvent) {
      setErrors(false);
      setErrMessage("Неверные значения");
    } else {
      setErrors(true);
      setErrMessage("");
    }
  }, [minDate, maxDate, minTime, maxTime, errMessage]);

  const resetForm = () => {
    reset();
    setErrMessage("");
    setErrors(false);
    setDateMin("");
    setDateMax("");
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
    resetForm();
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
    setIsModalOpen(!isModalOpen);
    resetForm();
  };

  const closeModal = () => {
    if (addData) {
      setIsModalOpen(!isModalOpen);
      setAddData(!addData);
    } else {
      setIsModalOpen(!isModalOpen);
    }
    resetForm();
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
              textError={errMessage}
              classNameFooter={classes.error}
            >
              <div>
                <form id="form-active" onSubmit={handleSubmit(onSubmit)}>
                  <InputTimeDate
                    max={maxDate}
                    textName="Начало"
                    registerDate={register("startDate", {
                      required: true,
                      validate: (input) => {
                        setDateMin(input);
                        return errorS;
                      },
                      onChange: () => console.log("k"),
                    })}
                    registerTime={register("startTime", {
                      required: true,
                      validate: (input) => {
                        setTimeMin(input);
                        return errorS;
                      },
                    })}
                  />
                  <InputTimeDate
                    min={minDate}
                    textName="Конец"
                    registerDate={register("endDate", {
                      required: true,
                      validate: (input) => {
                        setDateMax(input);
                        return errorS;
                      },
                    })}
                    registerTime={register("endTime", {
                      required: true,
                      validate: (input) => {
                        setTimeMax(input);
                        return errorS;
                      },
                    })}
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
