import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./LoginScreen.module.css";
import InputLogin from "../../common/Inputs/InputLogin/InputLogin";
import loginScreen from "./LoginScreenConst";
import NewSleepButton from "../../common/Buttons/NewSleepButton/NewSleepButton";

const LoginScreen: React.FC = () => {
  const [valueUserName, setValueUserName] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const enterUserName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValueUserName(e.target.value);
    console.log(`USER_NAME = ${e.target.value}`);
  };
  const enterPassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValuePassword(e.target.value);
    console.log(`PASSWORD = ${e.target.value}`);
  };

  const Login = () => console.log("ВОЙТИ");
  const registrationFn = () => console.log("REGISTRATION");

  return (
    <>
      <div className={classes.container}>
        <div className={classes.logo} />
        <InputLogin
          className={classes.user}
          type={loginScreen.TYPE_TEXT}
          placeholder={loginScreen.PLACEHOLDER_USER}
          value={valueUserName}
          onChange={enterUserName}
        />
        <InputLogin
          className={classes.password}
          type={loginScreen.TYPE_PASSWORD}
          placeholder={loginScreen.PLACEHOLDER_PASSWORD}
          value={valuePassword}
          onChange={enterPassword}
        />
        <Link to="/main">
          <NewSleepButton
            className={classes.button}
            text={loginScreen.TEXT_BUTTON}
            onClick={Login}
          />
        </Link>
        <Link
          to="/registration"
          className={classes.registration}
          onClick={registrationFn}
        >
          {loginScreen.TEXT_REGISTRATION}
        </Link>
      </div>
    </>
  );
};

export default LoginScreen;
