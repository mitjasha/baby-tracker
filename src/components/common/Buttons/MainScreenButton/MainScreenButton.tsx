import classNames from "classnames";
import React, { useState } from "react";
import BaseModalWindowWrapper from "../../ALLModalEdit/ModalEventWindow/BaseModalWindowWraper";
import "./MainScreenButton.css";

interface IMainScreenButton {
  children?: React.ReactNode;
  className?: string;
}

const MainScreenButton: React.FC<IMainScreenButton> = ({
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
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      />
    </>
  );
};

export default MainScreenButton;
