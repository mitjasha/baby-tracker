import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import cn from "classnames";
import InputBabyData from "../../common/Inputs/InputBabyData/InputBabyData";
import classes from "./BabyDataScreen.module.css";
import babyDataConst from "./BabyDataScreenCONST";
import NewSleepButton from "../../common/Buttons/NewSleepButton/NewSleepButton";
import InputGenderAddBaby from "../../common/Inputs/InputGenederAddBaby/InputGenderAddBaby";
import { IChildCreate, IEvent } from "../../../api/api.interface";
import childController from "../../../api/childController";
import eventController from "../../../api/eventController";

interface IBabySubmitForm {
  babyForm: IChildCreate;
  heightSubmit: IEvent;
  weightSubmit: IEvent;
}

const BabyDataScreen: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IBabySubmitForm>();
  // const [childID, childSet] = useState<string>();

  const onSubmit = (data: IBabySubmitForm) => {
    const { name } = data.babyForm;
    const gender = data.babyForm.gender[0].split(",")[1]; // data.gender = ["англ, русск"]
    const birth = new Date(data.babyForm.birth).toISOString();
    const photo = "";
    const babyData = {
      name,
      gender,
      birth,
      photo,
    };

    let event = "Рост";
    const startTime = new Date();
    const endTime = new Date();
    let { description } = data.heightSubmit;
    const eventHeight = {
      event,
      startTime,
      endTime,
      description,
    };

    event = "Вес";
    description = data.weightSubmit.description;
    const eventWeight = {
      event,
      startTime,
      endTime,
      description,
    };

    const setData = async () => {
      const child = await childController.addChild(babyData);
      eventController.addEvent(eventHeight, child.id);

      eventController.addEvent(eventWeight, child.id);
    };

    setData();
    console.log(babyData, eventHeight, eventWeight);
    window.location.href = "#/main/";
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.title}>{babyDataConst.TITLE_SCREEN}</div>
      <InputBabyData
        classInput={cn(classes.name, errors?.babyForm?.name && classes.error)}
        textName={babyDataConst.TEXT_NAME}
        type={babyDataConst.TYPE_TEXT}
        placeholder={babyDataConst.NAME}
        register={register("babyForm.name", { required: true })}
      />
      <InputGenderAddBaby
        classNameError={errors?.babyForm?.gender && classes.error}
        register={register("babyForm.gender", { required: true })}
      />
      <InputBabyData
        classInput={cn(classes.birth, errors?.babyForm?.birth && classes.error)}
        textName={babyDataConst.TEXT_BIRTHDAY}
        type={babyDataConst.TYPE_DATE}
        min={babyDataConst.BIRTH_MIN}
        max={babyDataConst.BIRTH_MAX}
        register={register("babyForm.birth", { required: true })}
      />
      <div className={classes.parameters}>
        <InputBabyData
          classInput={cn(
            classes.height,
            errors?.heightSubmit?.description && classes.error,
          )}
          textName={babyDataConst.TEXT_HEIGHT}
          type={babyDataConst.TYPE_NUMBER}
          min={babyDataConst.HEIGHT_MIN}
          max={babyDataConst.HEIGHT_MAX}
          step={babyDataConst.HEIGHT_STEP}
          register={register("heightSubmit.description", { required: true })}
        />
        <InputBabyData
          classInput={cn(
            classes.weight,
            errors?.weightSubmit?.description && classes.error,
          )}
          textName={babyDataConst.TEXT_WEIGHT}
          type={babyDataConst.TYPE_NUMBER}
          min={babyDataConst.WEIGHT_MIN}
          max={babyDataConst.WEIGHT_MAX}
          step={babyDataConst.WEIGHT_STEP}
          register={register("weightSubmit.description", { required: true })}
        />
      </div>
      <NewSleepButton
        className={classes.button}
        text={babyDataConst.TEXT_BUTTON}
      />
      <Link to="/main" className={classes.later}>
        {babyDataConst.TEXT_LATER}
      </Link>
    </form>
  );
};
export default BabyDataScreen;
