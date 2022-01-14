import React from "react";
import classNames from "classnames";
import "./Button.css";

interface IButton {
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
  id?: string;
  disabled?: boolean;
  active?: boolean;
  invert?: boolean;
}

// TODO
const Button: React.FC<IButton> = ({ children, onClick, className, disabled, active, invert, ...attrs }) => {
  // eslint-disable-next-line consistent-return
  const onClickAction: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (e) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick();
    }
  };

  const classes = classNames(className, { active }, { invert });

  return (
    <button className={classes} disabled={disabled} onClick={() => onClickAction} {...attrs}>
      {children}
    </button>
  );
};

export default Button;
