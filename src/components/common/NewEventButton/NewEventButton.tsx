import React from "react";
import classNames from "classnames";
import "./NewEventButton.css";

interface IButton {
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
  id?: string;
}

// TODO
const NewEventButton: React.FC<IButton> = ({
  children,
  onClick,
  className,
  ...attrs
}) => {
  const classes = classNames("btn", className);

  return (
    <button className={classes} onClick={() => onClick()} {...attrs}>
      {children}
    </button>
  );
};

export default NewEventButton;
