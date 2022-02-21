/* eslint-disable no-nested-ternary */
/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classes from "./ModalAddActivity.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import InputTimeDate from "../../Inputs/InputTimeDate/InputTimeDate";
import ModalAddActivityConst from "./ModalAddActivityConst";
import InputEat from "../../Inputs/InputsEat/InputEat";
// import saveDataFromFormToLS from "../../../helpers/saveDataFromFormLocalStorage";
import eventController from "../../../../api/eventController";

export interface IModalAddActivityForm {
  [key: string]: string;
}

interface IModalAddActivity {
  whatActivity: string;
  closeModalDefault?: () => void;
}

const ModalAddActivity: React.FC<IModalAddActivity> = ({
  whatActivity,
  closeModalDefault,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [dataActive, setDataActive] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const [errorS, setErrors] = useState<boolean>(false);
  const childID: string = JSON.parse(
    localStorage.getItem("currentChild") as string,
  );

  useEffect(() => {
    const newIcon = ModalAddActivityConst.filter((el) => el.text === dataActive)
      .map((el) => el.icon)
      .join("");
    setDataActive(whatActivity);
    setIcon(newIcon);
  });

  const { register, handleSubmit, reset, getValues } =
    useForm<IModalAddActivityForm>({ mode: "all" });

  const [minDate, setDateMin] = useState("");
  const [maxDate, setDateMax] = useState("");
  const [minTime, setTimeMin] = useState("");
  const [maxTime, setTimeMax] = useState("");
  const [text, setText] = useState("");
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
  }, [minDate, maxDate, minTime, maxTime, errMessage, text]);

  const resetForm = () => {
    reset();
    setErrMessage("");
    setErrors(false);
    setDateMin("");
    setDateMax("");
    setText("");
  };

  const onSubmit = (data: IModalAddActivityForm) => {
    console.log(dataActive);

    const dataEvent = {
      event: dataActive === "Бутылочка" || "Еда" ? "Кормление" : dataActive,
      startTime: new Date(`${data.startDate} ${data.startTime}`),
      endTime: new Date(`${data.endDate} ${data.endTime}`),
      description:
        dataActive !== "Бутылочка"
          ? dataActive.split(" ")[0]
          : data.description !== ""
          ? `${data.eat}, ${data.description}, ${data.eatValue} мл`
          : `${data.eat}, ${data.eatValue} мл`,
    };
    // saveDataFromFormToLS(dataActive, dataEvent);

    eventController.addEvent(dataEvent, childID);
    setIsModalOpen(false);
    resetForm();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  return (
    <ModalWindow
      id={dataActive}
      className={`${isModalOpen ? "open" : "close"}`}
      withFooter
      withIcon
      iconImg={icon}
      titleModal={dataActive}
      primaryBtn={{
        text: "Назад",
        onClick: closeModal,
      }}
      secondaryBtn={{
        type: "submit",
        text: "Сохранить",
        form: "form-active",
      }}
      onClose={closeModal}
      onClick={closeModalDefault}
      textError={errMessage}
      classNameFooter={classes.error}
      withOverlay={dataActive === "Сон" || dataActive === "Бутылочка"}
    >
      <div>
        <form id="form-active" onSubmit={handleSubmit(onSubmit)}>
          {dataActive === "Бутылочка" && (
            <InputEat
              min="10"
              max="1000"
              step="10"
              placeholder="Описание (компот, чай)"
              registerValue={register("eatValue", {
                required: true,
              })}
              registerData={register("eat", {
                required: true,
              })}
              registerText={register("description")}
            />
          )}
          <InputTimeDate
            maxi={maxDate}
            textName="Начало"
            registerDate={register("startDate", {
              required: true,
              validate: (input) => {
                setDateMin(input);
                return errorS;
              },
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
            mini={minDate}
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
  );
};

export default ModalAddActivity;
