import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import classes from "./RegScreen.module.css";
import InputLogin from "../../common/Inputs/InputLogin/InputLogin";
import {
  regScreen,
  validationName,
  validationPassword,
} from "./RegScreenConst";
import NewSleepButton from "../../common/Buttons/NewSleepButton/NewSleepButton";
import ToolTip from "../../common/ToolTip/ToolTip";

interface UserSubmitForm {
  name: string;
  password: string;
}

const RegScreen: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UserSubmitForm>({ mode: "onChange" });

  const signInBtn: () => void = () => console.log("ВОЙТИ");
  const onSubmit = (data: UserSubmitForm) => {
    console.log(data);
    window.location.href = "#/baby-data/";
    reset();
  };

  return (
    <>
      <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.logo} />
        <div className={classes.name}>
          <InputLogin
            className={classes.user}
            type={regScreen.TYPE_TEXT}
            placeholder={regScreen.PLACEHOLDER_USER}
            register={register("name", { ...validationName })}
          />
          {errors?.name && <ToolTip text={validationName.message} />}
        </div>
        <div className={classes.password}>
          <InputLogin
            className={classes.password}
            type={regScreen.TYPE_PASSWORD}
            placeholder={regScreen.PLACEHOLDER_PASSWORD}
            register={register("password", { ...validationPassword })}
          />
          {errors?.password && (
            <ToolTip
              classContainer={classes.errorPassword}
              text={validationPassword.message}
            />
          )}
        </div>
        <NewSleepButton
          className={classes.button}
          text={regScreen.TEXT_BUTTON}
        />
        <div className={classes.error}>
          {errors?.name && errors?.password && (
            <p>{regScreen.TEXT_ERROR_NAME}</p>
          )}
        </div>
        <Link to="/" className={classes.signIn} onClick={signInBtn}>
          {regScreen.TEXT_SIGNIN}
        </Link>
      </form>
    </>
  );
};

export default RegScreen;
