import React from "react";
import { AiOutlineHistory, AiOutlineHome } from "react-icons/ai";
import { FaCog, FaOpencart } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";

export interface SidebarItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  iconOpened?: React.ReactNode;
  iconClosed?: React.ReactNode;
  subnav?: SidebarItem[];
}

const SidebarData: SidebarItem[] = [
  {
    title: "Сон",
    path: "/sleeping",
    icon: <GiNightSleep />,
  },
  {
    title: "Кормление",
    path: "/feeding",
    icon: <FaOpencart />,
  },
  {
    title: "Активность",
    path: "/activity",
    icon: <AiOutlineHistory />,
  },
  {
    title: "Настройки",
    path: "/settings",
    icon: <FaCog />,
  },
  {
    title: "Домой",
    path: "/",
    icon: <AiOutlineHome />,
  },
];

export default SidebarData;
