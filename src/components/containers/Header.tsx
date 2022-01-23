import React from "react";
import SideBar from "../common/SideBar/SideBar";
import "./Header.css";

const Header: React.FC = () => (
  <header className="header">
    <div className="header-container">
      <SideBar />
    </div>
  </header>
);

export default Header;
