import React  from "react";
import "./NewSleepButton.css";


type INewSleepButton = {
  onClick: () => void,
  text: string,
  className: string,
}

const NewSleepButton: React.FC<INewSleepButton> = ({
  onClick,
  text,
  className
}) => (
    <div>
      <button className= {className} onClick={onClick}>{text}</button>
    </div>
  );

export default NewSleepButton;