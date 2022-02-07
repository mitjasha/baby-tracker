import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import classes from "./LoginScreen.module.css";
import InputLogin from "../../common/Inputs/InputLogin/InputLogin";
import loginScreen from "./LoginScreenConst";
import NewSleepButton from "../../common/Buttons/NewSleepButton/NewSleepButton";

interface UserSubmitForm {
  login: string;
  loginPassword: string;
}

const LoginScreen: React.FC = () => {
  const { register, handleSubmit } = useForm<UserSubmitForm>();
  const onSubmit = (data: UserSubmitForm) => {
    console.log(data);
    window.location.href = "#/main/";
  };
  const registrationFn = () => console.log("REGISTRATION");

  return (
    <>
      <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.logo} />
        <InputLogin
          className={classes.user}
          type={loginScreen.TYPE_TEXT}
          placeholder={loginScreen.PLACEHOLDER_USER}
          register={register("login")}
        />
        <InputLogin
          className={classes.password}
          type={loginScreen.TYPE_PASSWORD}
          placeholder={loginScreen.PLACEHOLDER_PASSWORD}
          register={register("loginPassword")}
        />
        <NewSleepButton
          className={classes.button}
          text={loginScreen.TEXT_BUTTON}
        />
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
