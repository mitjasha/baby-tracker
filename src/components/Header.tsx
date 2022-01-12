import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => (
  <header className="header">
    <div className="back ">
      <Link to="/" className="back-btn" id="back">
        back
      </Link>
    </div>
      <div className="settings">
      <Link to="/settings" className="settings-cog-btn" id="settings">
        settings
      </Link>
    </div>
  </header>
);
