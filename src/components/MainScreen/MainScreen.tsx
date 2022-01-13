import React from "react";
import { Link } from "react-router-dom";
import Timer from "../common/Timer";
import "./MainScreen.css";

const MainScreen: React.FC = () => (
  <div className="screen main">
    <h1 className="title">Baby Tracker</h1>

    <div className="timer-container">
      <Timer />
    </div>
    <div className="main-buttons">
      <Link to="/sleeping" className="start" id="start-sleep">
        <span className="btn-text">Sleeping</span>
      </Link>
      <Link to="/feeding" className="start" id="start-feed">
        <span className="btn-text">Feeding</span>
      </Link>
    </div>
  </div>
);

export default MainScreen;
