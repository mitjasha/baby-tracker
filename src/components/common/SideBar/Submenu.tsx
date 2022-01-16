import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarItem } from "./SidebarData";

type SidebarLinkProps = {
  item: SidebarItem;
};

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link to={item.path} onClick={showSubnav}>
        <div>
          {item.icon}
          <div className="sidebar-label">{item.title}</div>
        </div>
        <div>{item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}</div>
      </Link>
      {subnav &&
        item?.subnav?.map((subnavItem, index) => (
          <Link className="dropdown-link" to={subnavItem.path} key={index}>
            {subnavItem.icon}
            <div className="sidebar-label">{subnavItem.title}</div>
          </Link>
        ))}
    </>
  );
};

export default Submenu;
