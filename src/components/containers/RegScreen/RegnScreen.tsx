import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./RegScreen.module.css";
import InputLogin from "../../common/Inputs/InputLogin/InputLogin";
import regScreen from "./RegScreenConst";
import Footer from "../Footer";
import NewSleepButton from "../../common/Buttons/NewSleepButton/NewSleepButton";

const RegScreen: React.FC = () => {
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

  const signIn = () => console.log("ВОЙТИ");
  const register = () => console.log("РЕГИСТРАЦИЯ");

  return (
    <>
      <div className={classes.container}>
        <div className={classes.logo} />
        <InputLogin
          className={classes.user}
          type={regScreen.TYPE_TEXT}
          placeholder={regScreen.PLACEHOLDER_USER}
          value={valueUserName}
          onChange={enterUserName}
        />
        <InputLogin
          className={classes.password}
          type={regScreen.TYPE_PASSWORD}
          placeholder={regScreen.PLACEHOLDER_PASSWORD}
          value={valuePassword}
          onChange={enterPassword}
        />
        <Link to="/baby-data">
          <NewSleepButton
            className={classes.button}
            text={regScreen.TEXT_BUTTON}
            onClick={register}
          />
        </Link>
        <Link to="/" className={classes.signIn} onClick={signIn}>
          {regScreen.TEXT_SIGNIN}
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default RegScreen;
