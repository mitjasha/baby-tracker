import React from "react";
import { Link } from "react-router-dom";
import classes from "./Settings.module.css";

const Settings: React.FC = () => (
  <>
    <div className="screen" id="settings-page">
      <h2>Settings</h2>
      <div>
        <Link to="/baby-data" className={classes.settingsBtn} id="settings-def">
          <span className="btn-text">Добавить ребенка</span>
        </Link>
        <Link to="/" className={classes.settingsBtn} id="settings-def">
          <span className="btn-text">Выход</span>
        </Link>
      </div>

      <div className={classes.settingsButtons}>
        <Link to="/settings" className={classes.settingsBtn} id="settings-def">
          <span className="btn-text">Default</span>
        </Link>
        <Link to="/" className={classes.settingsBtn} id="settings-save">
          <span className="btn-text">Save</span>
        </Link>
      </div>
    </div>
  </>
);

export default Settings;
