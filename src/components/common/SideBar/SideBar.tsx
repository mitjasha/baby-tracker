import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import cn from "classnames";
import SidebarData from "./SidebarData";
import Submenu from "./Submenu";
import "./SideBar.css";

const Sidebar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="nav" onClick={showSidebar}>
        <Link to="#" className="nav-icon">
          <AiOutlineMenu />
        </Link>
      </div>
      <div className={cn("sidebar-nav", sidebar ? "open" : "close")}>
        <Link to="#" className="nav-icon" onClick={showSidebar}>
          <AiOutlineClose />
        </Link>
        <div className="sidebar-wrap" onClick={showSidebar}>
          {SidebarData.map((item, index) => (
            <Submenu item={item} key={index} />
          ))}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Sidebar;
