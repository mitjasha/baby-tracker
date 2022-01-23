import React from "react";

export interface SidebarItem {
  title: string;
  path: string;
  iconName: string;
  iconOpened?: React.ReactNode;
  iconClosed?: React.ReactNode;
  subnav?: SidebarItem[];
}

const SidebarData: SidebarItem[] = [
  {
    title: "Сон",
    iconName: "sleep",
    path: "/sleeping",
  },
  {
    title: "Кормление",
    iconName: "feeding",
    path: "/feeding",
  },
  {
    title: "Активность",
    iconName: "activity",
    path: "/activity",
  },
  {
    title: "Настройки",
    iconName: "setting",
    path: "/settings",
  },
  {
    title: "Домой",
    iconName: "home",
    path: "/main",
  },
];

export default SidebarData;
