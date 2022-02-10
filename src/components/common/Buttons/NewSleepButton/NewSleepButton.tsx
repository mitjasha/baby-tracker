import React, { ReactNode } from "react";
import "./NewSleepButton.css";

type INewSleepButton = {
  onClick?: () => void;
  text: string;
  className: string;
  type?: "submit" | "reset" | "button" | undefined;
  children?: ReactNode;
  form?: string;
};

const NewSleepButton: React.FC<INewSleepButton> = ({
  children,
  onClick,
  text,
  className,
  type,
  form,
}) => (
  <>
    <button className={className} onClick={onClick} type={type} form={form}>
      {text}
      {children}
    </button>
  </>
);

export default NewSleepButton;
