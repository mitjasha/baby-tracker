import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface ILinkButton {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  disabled?: boolean;
  active?: boolean;
  invert?: boolean;
  to?: string;
}

const MainMenuButton: React.FC<ILinkButton> = ({ children, className, disabled, active, invert, to, ...attrs }) => {
  const classes = classNames("btn", className, { active }, { invert });

  return (
    <Link to={to as string} className={classes} {...attrs}>
      {children}
    </Link>
  );
};

export default MainMenuButton;
