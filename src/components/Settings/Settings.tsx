import React from "react";
import { Link } from "react-router-dom";

let timerStatus = false;
function timerSwitch() {
  if (timerStatus === true) {
    timerStatus = false;
  } else {
    timerStatus = true;
  }
}
//  TODO
export const Settings: React.FC = () => (
  <div className="screen" id="settings_page">
    <h2>Settings</h2>
    <div className="settings-container">
      <div className="volume">
        <h3>Volume</h3>
        <input
          className="slider-volume"
          id="volume"
          type="range"
          name="volume"
          min="0"
          max="100"
          step="1"
        />
      </div>
      <div className="timer">
        <h3>Timer</h3>
        <label htmlFor="checkbox" className="timer-switch">
          <input
            type="checkbox"
            name="timer-switcher"
            id="checkbox"
            onChange={() => timerSwitch}
          />
          <span className="slider round" />
        </label>
      </div>
    </div>

    <div className="settings-buttons">
      <Link to="/settings" className="settings-btn" id="settings_def">
        <span className="btn_text">Default</span>
      </Link>
      <Link to="/" className="settings-btn" id="settings_save">
        <span className="btn_text">Save</span>
      </Link>
    </div>
  </div>
);


