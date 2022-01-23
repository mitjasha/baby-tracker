import React, { FC, useState } from "react";
import cn from "classnames";
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
        <div className="nav-link-sidebar">
          <div className={cn("icon-img", `icon-img-${item.iconName}`)}></div>
          <div className="sidebar-label">{item.title}</div>
        </div>
      </Link>
      {subnav &&
        item?.subnav?.map((subnavItem, index) => (
          <Link className="dropdown-link" to={subnavItem.path} key={index}>
            <div className="sidebar-label">{subnavItem.title}</div>
          </Link>
        ))}
    </>
  );
};

export default Submenu;
