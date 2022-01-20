import React from "react";
import "./ModalAddEvent";
import classNames from "classnames";


interface IModalAddEvent {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

const ModalAddEvent: React.FC<IModalAddEvent> = ({
  children,
  className
}) => {
  const classes = classNames("modal-add-events", className);
  return (<>
  <div className={classes}>
  {children}
  </div>
  </>);
};

export default ModalAddEvent;
