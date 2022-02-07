import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import classes from "./RegScreen.module.css";
import InputLogin from "../../common/Inputs/InputLogin/InputLogin";
import regScreen from "./RegScreenConst";
import NewSleepButton from "../../common/Buttons/NewSleepButton/NewSleepButton";

interface UserSubmitForm {
  name: string;
  password: string;
}

const RegScreen: React.FC = () => {
  const { register, handleSubmit } = useForm<UserSubmitForm>();

  const signInBtn: () => void = () => console.log("ВОЙТИ");
  const onSubmit = (data: UserSubmitForm) => {
    console.log(data);
    window.location.href = "#/baby-data/";
  };

  return (
    <>
      <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.logo} />
        <InputLogin
          className={classes.user}
          type={regScreen.TYPE_TEXT}
          placeholder={regScreen.PLACEHOLDER_USER}
          register={register("name")}
        />
        <InputLogin
          className={classes.password}
          type={regScreen.TYPE_PASSWORD}
          placeholder={regScreen.PLACEHOLDER_PASSWORD}
          register={register("password")}
        />
        <NewSleepButton
          type="submit"
          className={classes.button}
          text={regScreen.TEXT_BUTTON}
        />

        <Link to="/" className={classes.signIn} onClick={signInBtn}>
          {regScreen.TEXT_SIGNIN}
        </Link>
      </form>
    </>
  );
};

export default RegScreen;
