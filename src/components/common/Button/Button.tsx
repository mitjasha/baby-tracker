import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Button.css";

interface IButton {
  children?: React.ReactNode;
  onClick?: void | (() => void);
  className?: string;
  disabled?: boolean;
  active?: boolean;
  invert?: boolean;
}

const Button: React.FC<IButton> = ({ children, onClick, className, disabled, active, invert, ...attrs }) => {
  // eslint-disable-next-line consistent-return
  const onClickAction = (e: MouseEvent) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick;
    }
  };

  const classes = classNames("btn", className, { active }, { invert });

  const Tag = attrs.href ? "a" : "button";

  return (
    <Tag className={classes} disabled={disabled} onClick={onClickAction} {...attrs}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: "Default button",
  onClick: () => {},
  className: "",
  disabled: false,
  active: false,
};

export default Button;
