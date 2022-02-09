import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import classes from "./LoginScreen.module.css";
import InputLogin from "../../common/Inputs/InputLogin/InputLogin";
import {
  loginScreen,
  validationLogin,
  validationPassword,
} from "./LoginScreenConst";
import NewSleepButton from "../../common/Buttons/NewSleepButton/NewSleepButton";
import ToolTip from "../../common/ToolTip/ToolTip";

interface UserSubmitForm {
  login: string;
  loginPassword: string;
}

const LoginScreen: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UserSubmitForm>({ mode: "onChange" });
  const onSubmit = (data: UserSubmitForm) => {
    console.log(data);
    window.location.href = "#/main/";
    reset();
  };
  const registrationFn = () => console.log("REGISTRATION");

  return (
    <>
      <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.logo} />
        <div className={classes.login}>
          <InputLogin
            className={classes.user}
            type={loginScreen.TYPE_TEXT}
            placeholder={loginScreen.PLACEHOLDER_USER}
            register={register("login", { ...validationLogin })}
          />
          {errors?.login && <ToolTip text={validationLogin.pattern.message} />}
        </div>
        <div className={classes.loginPassword}>
          <InputLogin
            className={classes.password}
            type={loginScreen.TYPE_PASSWORD}
            placeholder={loginScreen.PLACEHOLDER_PASSWORD}
            register={register("loginPassword", { ...validationPassword })}
          />
          {errors?.loginPassword && (
            <ToolTip
              classContainer={classes.containerPassword}
              text={validationPassword.pattern.message}
            />
          )}
        </div>
        <NewSleepButton
          className={classes.button}
          text={loginScreen.TEXT_BUTTON}
        />
        <div className={classes.error}>
          {errors?.login && errors?.loginPassword && (
            <p>{loginScreen.TEXT_ERROR_LOGIN}</p>
          )}
        </div>
        <Link
          to="/registration"
          className={classes.registration}
          onClick={registrationFn}
        >
          {loginScreen.TEXT_REGISTRATION}
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
