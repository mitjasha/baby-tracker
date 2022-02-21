import React from "react";
// import { useForm } from "react-hook-form";
// import classes from "./ModalAddEat.module.css";
// import { FeedingButtonConst } from "../../FeedingButtonContainer/FeedingButtonContainerConst";
import ModalAddActivity from "../ModalAddActivity/ModalAddActivity";

// interface IModalAddEatForm {
//   [key: string]: string;
// }

interface IModalAddEat {
  whatActivity: string;
  closeModalDefault?: () => void;
}

const ModalAddEat: React.FC<IModalAddEat> = ({
  whatActivity,
  // closeModalDefault,
}) => (
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  // const [dataActive, setDataActive] = useState<string>("");
  // const [icon, setIcon] = useState<string>("");
  // const [errorS, setErrors] = useState<boolean>(false);

  // useEffect(() => {
  //   const newIcon = FeedingButtonConst.filter((el) => el.text === dataActive)
  //     .map((el) => el.icon)
  //     .join("");
  //   setDataActive(whatActivity);
  //   setIcon(newIcon);
  // }, [dataActive]);

  // const { register, handleSubmit, reset, getValues } =
  //   useForm<IModalAddEatForm>({ mode: "onChange" });

  // const [minDate, setDateMin] = useState("");
  // const [maxDate, setDateMax] = useState("");
  // const [minTime, setTimeMin] = useState("");
  // const [maxTime, setTimeMax] = useState("");
  // const [errMessage, setErrMessage] = useState("");

  // useEffect(() => {
  //   const startEvent = Date.parse(
  //     `${getValues("startDate")} ${getValues("startTime")}`,
  //   );
  //   const endEvent = Date.parse(
  //     `${getValues("endDate")} ${getValues("endTime")}`,
  //   );
  //   if (startEvent > endEvent) {
  //     setErrors(false);
  //     setErrMessage("Неверные значения");
  //   } else {
  //     setErrors(true);
  //     setErrMessage("");
  //   }
  // }, [minDate, maxDate, minTime, maxTime, errMessage]);

  // const resetForm = () => {
  //   reset();
  //   setErrMessage("");
  //   setErrors(false);
  //   setDateMin("");
  //   setDateMax("");
  // };

  // const onSubmit = (data: IModalAddEatForm) => {
  //   const dataEvent = {
  //     event: dataActive,
  //     startTime: `${data.startDate} ${data.startTime}`,
  //     endTime: `${data.endDate} ${data.endTime}`,
  //     description: "",
  //   };
  //   console.log(JSON.stringify(dataEvent));
  //   setIsModalOpen(false);
  //   resetForm();
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   resetForm();
  // };
  <>
    {whatActivity[1] === "food" && (
      <ModalAddActivity whatActivity={[whatActivity]} />
    )}
    {whatActivity[1] === "bootle" && (
      <ModalAddActivity whatActivity={[whatActivity]} />
    )}
    NJghjgdhsg
  </>
);

export default ModalAddEat;
