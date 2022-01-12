import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="header">
    <div className="back ">
      <Link to="/" className="back_btn" id="back">
        back
      </Link>
    </div>
    <div />
    <div className="settings">
      <Link to="/settings" className="settings_cog_btn" id="settings">
        settings
      </Link>
    </div>
  </header>
);

export default Header;
