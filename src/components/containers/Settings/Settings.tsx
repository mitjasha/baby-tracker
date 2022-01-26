import React from "react";
import { Link } from "react-router-dom";

const Settings: React.FC = () => {
  let timerStatus = false;

  const timerSwitch = () => {
    if (timerStatus === true) {
      timerStatus = false;
    } else {
      timerStatus = true;
    }
  };
  return (
    <>
      <div className="screen" id="settings-page">
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
          <div className="settings-timer">
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
          <Link to="/settings" className="settings-btn" id="settings-def">
            <span className="btn-text">Default</span>
          </Link>
          <Link to="/" className="settings-btn" id="settings-save">
            <span className="btn-text">Save</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Settings;
