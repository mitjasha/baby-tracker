import React from "react";
import { Link } from "react-router-dom";
import InputBabyData from "../../common/Inputs/InputBabyData/InputBabyData";
import classes from "./BabyDataScreen.module.css";
import babyData from "./BabyDataScreenCONST";
import { currentDay } from "../../helpers/changeNum";
import NewSleepButton from "../../common/Buttons/NewSleepButton/NewSleepButton";
import InputGenderAddBaby from "../../common/Inputs/InputGenederAddBaby/InputGenderAddBaby";

const BabyDataScreen: React.FC = () => {
  const save = () => console.log("save");

  return (
    <div className={classes.container}>
      <div className={classes.title}>{babyData.TITLE_SCREEN}</div>
      <InputBabyData
        classInput={classes.name}
        textName={babyData.TEXT_NAME}
        type={babyData.TYPE_TEXT}
        placeholder={babyData.NAME}
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
        defaultValue={currentDay}
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
        />
        <InputBabyData
          classInput={classes.weight}
          textName={babyData.TEXT_WEIGHT}
          type={babyData.TYPE_NUMBER}
          placeholder={"3.200"}
          min={"1.500"}
          max={"30"}
          step={"0.100"}
        />
      </div>
      <label className={classes.photoContainer}>
        <div className={classes.photo}></div>
        <InputBabyData
          textName={babyData.TEXT_PHOTO}
          type={babyData.TYPE_FILE}
        />
      </label>
      <NewSleepButton
        className={classes.button}
        text={babyData.TEXT_BUTTON}
        onClick={save}
      />
      <Link to="/main" className={classes.later}>
        {babyData.TEXT_LATER}
      </Link>
    </div>
  );
};
export default BabyDataScreen;
