import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
  const { register, handleSubmit } = useForm<IBabySubmitForm>();
  const onSubmit = (data: IBabySubmitForm) => {
    const name = data.nameBaby;
    const gender = data.gender[0].split(",")[0]; // data.gender = ["англ, русск"]
    const birth = data.birthDayBaby;
    const height = data.heightBaby;
    const weight = data.heightBaby;
    const photo = data.photoBaby;
    const babyData = {
      nameBaby: name,
      gender,
      birthDayBaby: birth,
      heightBaby: height,
      weightBaby: weight,
      photo,
    };
    console.log(babyData);
    window.location.href = "#/main/";
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.title}>{babyDataConst.TITLE_SCREEN}</div>
      <InputBabyData
        classInput={classes.name}
        textName={babyDataConst.TEXT_NAME}
        type={babyDataConst.TYPE_TEXT}
        placeholder={babyDataConst.NAME}
        register={register("nameBaby", { required: true })}
      />
      <InputGenderAddBaby register={register("gender", { required: true })} />
      <InputBabyData
        classInput={classes.birth}
        textName={babyDataConst.TEXT_BIRTHDAY}
        type={babyDataConst.TYPE_DATE}
        register={register("birthDayBaby", { required: true })}
      />
      <div className={classes.parameters}>
        <InputBabyData
          classInput={classes.height}
          textName={babyDataConst.TEXT_HEIGHT}
          type={babyDataConst.TYPE_NUMBER}
          placeholder={"52"}
          min={"45"}
          max={"122"}
          step={"1"}
          register={register("heightBaby", { required: true })}
        />
        <InputBabyData
          classInput={classes.weight}
          textName={babyDataConst.TEXT_WEIGHT}
          type={babyDataConst.TYPE_NUMBER}
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
          textName={babyDataConst.TEXT_PHOTO}
          type={babyDataConst.TYPE_FILE}
          register={register("photoBaby")}
        />
      </label>
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
