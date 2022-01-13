import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./Button.css";

interface IButton {
  children?: React.ReactNode;
  onClick?: void | (() => void);
  className?: string;
  disabled?: boolean;
  active?: boolean;
  invert?: boolean;
  tag?: "a" | "button" | "Link";
  to?: string;
  id?: string;
}

const Button: React.FC<IButton> = ({ children, onClick, className, disabled, active, invert, tag, to, ...attrs }) => {
  // eslint-disable-next-line consistent-return
  const onClickAction = (e: Event) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick;
    }
  };

  const classes = classNames("btn", className, { active }, { invert });

  if (tag === "button") {
    return (
      <button className={classes} disabled={disabled} onClick={() => onClickAction} {...attrs}>
        {children}
      </button>
    );
  }

  if (tag === "a") {
    return (
      <a href={to} className={classes} onClick={() => onClickAction} {...attrs}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to as string} className={classes} onClick={() => onClickAction} {...attrs}>
      {children}
    </Link>
  );
};

export default Button;
