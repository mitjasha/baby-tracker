import React from 'react';
import { Link } from 'react-router-dom';

export const MainScreen: React.FC = () => (
  <div className="screen main">
    <h1 className="title">Baby Tracker</h1>
    <div className="main_buttons">
      <Link to="/sleeping" className="start" id="start_sleep">
        <span className="btn_text">Sleeping</span>
      </Link>
      <Link to="/feeding" className="start" id="start_feed">
        <span className="btn_text">Feeding</span>
      </Link>
    </div>
  </div>
);
