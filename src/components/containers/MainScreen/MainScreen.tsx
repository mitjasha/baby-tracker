import React from "react";
import { Link } from "react-router-dom";
import NewEventButton from "../../common/NewEventButton/NewEventButton";
import Timeline from "../../common/Timeline/Timeline";
import Timer from "../../common/Timer/Timer";
import "./MainScreen.css";

const MainScreen: React.FC = () => (
  <div className="screen main">
    <div className="main-screen-up-container">
      <div className="main-screen-info">
        <h1 className="title">Baby Tracker</h1>
      </div>
      <div className="main-screen-timer-container">
        <div className="timer-wrap">
          <Timer />
        </div>
      </div>
    </div>

    <div className="main-buttons-container">
      {/* TODO button */}
      <Link to="/sleeping" className="start" id="start-sleep">
        <span className="btn-text">Sleeping</span>
      </Link>
      <Link to="/feeding" className="start" id="start-feed">
        <span className="btn-text">Feeding</span>
      </Link>
    </div>
    <div className="main-screen-timeline">
      <Timeline></Timeline>
    </div>
    <div className="main-screen-add-activity">
      <NewEventButton />
    </div>
  </div>
);

export default MainScreen;
