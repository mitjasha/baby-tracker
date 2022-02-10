import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import InputBabyData from "../../common/Inputs/InputBabyData/InputBabyData";
import classes from "./BabyDataScreen.module.css";
import babyData from "./BabyDataScreenCONST";
import NewSleepButton from "../../common/Buttons/NewSleepButton/NewSleepButton";
import InputGenderAddBaby from "../../common/Inputs/InputGenederAddBaby/InputGenderAddBaby";

interface IBabySubmitForm {
  nameBaby: string | number;
  genderBaby: string;
  birthDayBaby: Date;
  heightBaby: string;
  weightBaby: string;
  photoBaby?: string;
}

const BabyDataScreen: React.FC = () => {
  const { register, handleSubmit } = useForm<IBabySubmitForm>();
  const onSubmit = (data: IBabySubmitForm) => {
    console.log(data);
    window.location.href = "#/main/";
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.title}>{babyData.TITLE_SCREEN}</div>
      <InputBabyData
        classInput={classes.name}
        textName={babyData.TEXT_NAME}
        type={babyData.TYPE_TEXT}
        placeholder={babyData.NAME}
        register={register("nameBaby", { required: true })}
      />
      <InputGenderAddBaby
        textTitle={babyData.TEXT_GENDER}
        classBoy={classes.boy}
        classGirl={classes.girl}
        textBoy={babyData.TEXT_BOY}
        textGirl={babyData.TEXT_GIRL}
      />
      <InputBabyData
        classInput={classes.birth}
        textName={babyData.TEXT_BIRTHDAY}
        type={babyData.TYPE_DATE}
        register={register("birthDayBaby", { required: true })}
      />
      <div className={classes.parameters}>
        <InputBabyData
          classInput={classes.height}
          textName={babyData.TEXT_HEIGHT}
          type={babyData.TYPE_NUMBER}
          placeholder={"52"}
          min={"45"}
          max={"122"}
          step={"1"}
          register={register("heightBaby", { required: true })}
        />
        <InputBabyData
          classInput={classes.weight}
          textName={babyData.TEXT_WEIGHT}
          type={babyData.TYPE_NUMBER}
          placeholder={"3,200"}
          min={"1,500"}
          max={"30"}
          step={"0,100"}
          register={register("weightBaby", { required: true })}
        />
      </div>
      <label className={classes.photoContainer}>
        <div className={classes.photo}></div>
        <InputBabyData
          textName={babyData.TEXT_PHOTO}
          type={babyData.TYPE_FILE}
          register={register("photoBaby")}
        />
      </label>
      <NewSleepButton className={classes.button} text={babyData.TEXT_BUTTON} />
      <Link to="/main" className={classes.later}>
        {babyData.TEXT_LATER}
      </Link>
    </form>
  );
};
export default BabyDataScreen;
