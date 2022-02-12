import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import cn from "classnames";
import InputBabyData from "../../common/Inputs/InputBabyData/InputBabyData";
import classes from "./BabyDataScreen.module.css";
import babyDataConst from "./BabyDataScreenCONST";
import NewSleepButton from "../../common/Buttons/NewSleepButton/NewSleepButton";
import InputGenderAddBaby from "../../common/Inputs/InputGenederAddBaby/InputGenderAddBaby";

interface IBabySubmitForm {
  nameBaby: string | number;
  gender: string;
  birthDayBaby: Date;
  heightBaby: string;
  weightBaby: string;
  photoBaby?: string;
}

const BabyDataScreen: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IBabySubmitForm>();
  const onSubmit = (data: IBabySubmitForm) => {
    const name = data.nameBaby;
    const gender = data.gender[0].split(",")[0]; // data.gender = ["англ, русск"]
    const birth = data.birthDayBaby;
    const height = data.heightBaby;
    const weight = data.heightBaby;
    const photo = "";
    const babyData = {
      name,
      gender,
      birth,
      height,
      weight,
      photo,
    };
    console.log(babyData);
    window.location.href = "#/main/";
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.title}>{babyDataConst.TITLE_SCREEN}</div>
      <InputBabyData
        classInput={cn(classes.name, errors?.nameBaby && classes.error)}
        textName={babyDataConst.TEXT_NAME}
        type={babyDataConst.TYPE_TEXT}
        placeholder={babyDataConst.NAME}
        register={register("nameBaby", { required: true })}
      />
      <InputGenderAddBaby
        classNameError={errors?.gender && classes.error}
        register={register("gender", { required: true })}
      />
      <InputBabyData
        classInput={cn(classes.birth, errors?.birthDayBaby && classes.error)}
        textName={babyDataConst.TEXT_BIRTHDAY}
        type={babyDataConst.TYPE_DATE}
        min={babyDataConst.BIRTH_MIN}
        max={babyDataConst.BIRTH_MAX}
        register={register("birthDayBaby", { required: true })}
      />
      <div className={classes.parameters}>
        <InputBabyData
          classInput={cn(classes.height, errors?.heightBaby && classes.error)}
          textName={babyDataConst.TEXT_HEIGHT}
          type={babyDataConst.TYPE_NUMBER}
          min={babyDataConst.HEIGHT_MIN}
          max={babyDataConst.HEIGHT_MAX}
          step={babyDataConst.HEIGHT_STEP}
          register={register("heightBaby", { required: true })}
        />
        <InputBabyData
          classInput={cn(classes.weight, errors?.weightBaby && classes.error)}
          textName={babyDataConst.TEXT_WEIGHT}
          type={babyDataConst.TYPE_NUMBER}
          min={babyDataConst.WEIGHT_MIN}
          max={babyDataConst.WEIGHT_MAX}
          step={babyDataConst.WEIGHT_STEP}
          register={register("weightBaby", { required: true })}
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
