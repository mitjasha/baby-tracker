import React from "react";
import "./NewSleepButton.css";

interface INewSleepButton {
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
  id?: string;
}

const NewSleepButton: React.FC<INewSleepButton> = ({
  children,
  onClick,
  ...attrs
}) => (
    <div className={"btn-sleep"} onClick={() => onClick()} {...attrs}>
      {children}
    </div>
  );
;

export default NewSleepButton;