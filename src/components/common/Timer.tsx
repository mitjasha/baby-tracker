import React from "react";
import "./Timer.css";

const Timer: React.FC = () => (
  <>
    <div className="spinner"></div>
    <div className="timer">
      <div className="circle"></div>
    </div>
  </>
);

export default Timer;
