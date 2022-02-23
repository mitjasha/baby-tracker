import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import classes from "./Settings.module.css";
import { changeColor } from "../../helpers/changeColor";
import { palitra1, palitra2, palitra3 } from "./SettingConst";
import saveSetting from "../../helpers/saveSetting";

const Settings: React.FC = () => {
  const [whatPalitra, setPalitra] = useState("1");

  return (
    <>
      <div className={classes.screen} id="settings-page">
        <h2>Настройки</h2>
        <div className={classes.btnFirst}>
          <Link
            to="/baby-data"
            className={classes.settingsBtn}
            id="settings-def"
          >
            <span className={classes.text}>Добавить ребенка</span>
          </Link>
        </div>

        <div className={classes.settingsButtons}>
          <h3 className={classes.h3}>Выбрать палитру для приложения</h3>
          <div className={classes.palitres}>
            <button
              className={cn(classes.palitra, classes.palitra1)}
              onClick={() => {
                changeColor(palitra1);
                setPalitra("1");
              }}
            ></button>
            <button
              className={cn(classes.palitra, classes.palitra2)}
              onClick={() => {
                changeColor(palitra2);
                setPalitra("2");
              }}
            ></button>
            <button
              className={cn(classes.palitra, classes.palitra3)}
              onClick={() => {
                changeColor(palitra3);
                setPalitra("3");
              }}
            ></button>
          </div>
          <div className={classes.wrapperSettingBtn}>
            <button
              className={cn(classes.settingsBtn, classes.btn)}
              onClick={() => {
                changeColor(palitra1);
                saveSetting("1");
              }}
            >
              <span className={classes.text}>Сбросить</span>
            </button>
            <Link to="/main">
              <button
                className={cn(classes.settingsBtn, classes.btn)}
                onClick={() => saveSetting(whatPalitra)}
              >
                <span className={classes.text}>Сохранить</span>
              </button>
            </Link>
          </div>
        </div>
        <Link to="/" className={classes.settingsBtn} id="settings-def">
          <span className={classes.text}>Выход</span>
        </Link>
      </div>
    </>
  );
};
export default Settings;
