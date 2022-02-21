import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classes from "./ModalAddActivity.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import InputTimeDate from "../../Inputs/InputTimeDate/InputTimeDate";
import {
  ModalAddActivityConst,
  feeding,
  feedingSleep,
  drinkEat,
} from "./ModalAddActivityConst";
import InputEat from "../../Inputs/InputsEat/InputEat";

export interface IModalAddActivityForm {
  [key: string]: string;
}

interface IModalAddActivity {
  whatActivity: string[];
  closeModalDefault?: () => void;
}

const ModalAddActivity: React.FC<IModalAddActivity> = ({
  whatActivity,
  closeModalDefault,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [dataActive, setDataActive] = useState<string[]>(whatActivity);
  const [icon, setIcon] = useState<string>("");
  const [errorS, setErrors] = useState<boolean>(false);

  useEffect(() => {
    const newIcon = ModalAddActivityConst.filter(
      (el) => el.text === dataActive[0],
    )
      .map((el) => el.icon)
      .join("");
    setDataActive(dataActive);
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
    console.log(data);
    const dataEvent = {
      event: dataActive[0],
      startTime: `${data.startDate} ${data.startTime}`,
      endTime: feeding.includes(dataActive[0])
        ? `${data.startDate} ${data.startDate}`
        : `${data.endDate} ${data.endTime}`,
      description:
        data.descreatiption !== ""
          ? `${data.food}, ${data.descreatiption}, ${data.foodValue} ${
              drinkEat[dataActive[0]].OZ
            }`
          : `${data.food}, ${data.foodValue} ${drinkEat[dataActive[0]].OZ}`,
    };
    console.log(JSON.stringify(dataEvent));
    setIsModalOpen(false);
    resetForm();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  return (
    <ModalWindow
      id={dataActive[1]}
      className={`${isModalOpen ? "open" : "close"}`}
      withFooter
      withIcon
      iconImg={icon}
      titleModal={dataActive[0]}
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
      withOverlay={feedingSleep.includes(dataActive[0])}
    >
      <div>
        <form id="form-active" onSubmit={handleSubmit(onSubmit)}>
          {feeding.includes(dataActive[0]) && (
            <InputEat
              min={drinkEat[dataActive[1]].MIN_VALUE}
              max={drinkEat[dataActive[1]].MAX_VALUE}
              step={drinkEat[dataActive[1]].STEP}
              placeholder={drinkEat[dataActive[1]].PLACEHOLDER}
              oz={drinkEat[dataActive[1]].OZ}
              registerValue={register(drinkEat[dataActive[1]].REGISTER_VALUE, {
                required: true,
              })}
              registerData={register(drinkEat[dataActive[1]].REGISTER_DATA, {
                required: true,
              })}
              registerText={register("descreatiption")}
            >
              {" "}
              children=
              {drinkEat[dataActive[1]].VARIANT.map((el) => (
                <option key={el}>{el}</option>
              ))}
            </InputEat>
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
          {!feeding.includes(dataActive[0]) && (
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
          )}
        </form>
      </div>
    </ModalWindow>
  );
};

export default ModalAddActivity;
