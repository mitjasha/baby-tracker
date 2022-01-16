import React from "react";
import { Link } from "react-router-dom";
import NewEventButton from "../../common/NewEventButton/NewEventButton";
import Timer from "../../common/Timer/Timer";
import "./MainScreen.css";

const MainScreen: React.FC = () => (
  <div className="screen main">
    <h1 className="title">Baby Tracker</h1>

    <div className="timer-container-main-screen">
      <Timer />
    </div>
    <div className="main-buttons">
      {/* TODO button */}
      <Link to="/sleeping" className="start" id="start-sleep">
        <span className="btn-text">Sleeping</span>
      </Link>
      <Link to="/feeding" className="start" id="start-feed">
        <span className="btn-text">Feeding</span>
      </Link>
    </div>
    <div className="main-add-activity">
      <NewEventButton
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        + Новое событие
      </NewEventButton>
    </div>
  </div>
);

export default MainScreen;
