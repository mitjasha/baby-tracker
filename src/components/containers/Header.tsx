import React from "react";
import DropDown from "../common/DropDown/DropDown";
import SideBar from "../common/SideBar/SideBar";
import "./Header.css";

const Header: React.FC = () => (
  <header className="header">
    <div className="header-container">
      <SideBar />

      <DropDown />
    </div>
  </header>
);

export default Header;
