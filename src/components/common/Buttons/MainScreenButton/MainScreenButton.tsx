import classNames from "classnames";
import React, { useState } from "react";
import BaseModalWindowWrapper from "../../ALLModalEdit/ModalEventWindow/BaseModalWindowWraper";
import "./MainScreenButton.css";

interface IMainScreenButton {
  eventName: string;
  children?: React.ReactNode;
  className?: string;
}

const MainScreenButton: React.FC<IMainScreenButton> = ({
  eventName,
  children,
  className,
}) => {
  const classes = classNames("main-screen-button", className);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };
  return (
    <>
      <button className={classes} onClick={toggleModal}>
        {children}
      </button>
      <BaseModalWindowWrapper
        eventName={eventName}
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      />
    </>
  );
};

export default MainScreenButton;
