import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputBreast from "../../Inputs/InputBreast/InputBreast";
import InputTimeDate from "../../Inputs/InputTimeDate/InputTimeDate";
import { IModalAddActivityForm } from "../ModalAddActivity/ModalAddActivity";
import ModalEventWindow from "./ModalEventWindow";

interface IBaseModalWrapperProps {
  eventName: string;
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalWindowWrapper: React.FC<IBaseModalWrapperProps> = ({
  eventName,
  onBackdropClick,
  isModalVisible,
}) => {
  if (!isModalVisible) {
    return null;
  }
  const primaryBtn = {
    text: "Назад",
    onClick: () => null,
  };

  const secondaryBtn = {
    type: "submit",
    text: "Сохранить",
    form: "form-active",
  };
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [errorS, setErrors] = useState<boolean>(false);
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
    const dataEvent = {
      event: eventName,
      startTime: `${data.startDate} ${data.startTime}`,
      endTime: `${data.endDate} ${data.endTime}`,
      description: data.description !== "" ? `${data.description}` : "",
    };
    // saveDataFromFormToLS(dataActive, dataEvent);
    console.log(JSON.stringify(dataEvent));
    // setIsModalOpen(false);
    resetForm();
    onBackdropClick();
  };
  return (
    <ModalEventWindow onBackdropClick={onBackdropClick}>
      <div className="desktop-modal-window-container modal-window-container">
        <div className="modal-window-content">{eventName}</div>
        <form id="form-active" onSubmit={handleSubmit(onSubmit)}>
          {eventName === "Кормление" && (
            <InputBreast registerData={register("description")} />
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
        <div className="buttons">
          <button
            // className={cn("modal-button", primaryBtn.className)}
            onClick={() => {
              resetForm();
              onBackdropClick();
            }}
          >
            {primaryBtn.text}
          </button>
          <button
            // className={cn("modal-button", secondaryBtn.className)}
            onClick={() => {}}
            form={secondaryBtn.form}
          >
            {secondaryBtn.text}
          </button>
        </div>
      </div>
    </ModalEventWindow>
  );
};

export default BaseModalWindowWrapper;
