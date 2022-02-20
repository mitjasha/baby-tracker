import classNames from "classnames";
import React, { useState } from "react";
import BaseModalWindowWrapper from "../../ALLModalEdit/ModalEventWindow/BaseModalWindowWraper";
import "./ModalMenuButton.css";

interface IModalMenuButton {
  eventName: string;
  children?: React.ReactNode;
  className?: string;
}

const ModalMenuButton: React.FC<IModalMenuButton> = ({
  eventName,
  children,
  className,
}) => {
  const classes = classNames("modal-menu-button", className);
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

export default ModalMenuButton;
