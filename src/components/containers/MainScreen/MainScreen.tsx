import React from "react";
import Timer from "../../common/Timer/Timer";
import Button from "../../common/Button/Button";
import "./MainScreen.css";

const MainScreen: React.FC = () => (
  <div className="screen main">
    <h1 className="title">Baby Tracker</h1>

    <div className="timer-container">
      <Timer />
    </div>
    <div className="main-buttons">
      <Button tag="Link" to="/sleeping" className="start" id="start-sleep">
        <span className="btn-text">Sleeping</span>
      </Button>
      <Button tag="Link" to="/feeding" className="start" id="start-feed">
        <span className="btn-text">Feeding</span>
      </Button>
    </div>
  </div>
);

export default MainScreen;
