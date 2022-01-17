import React, { useState } from "react";
import BaseModalWindowWrapper from "../ModalEventWindow/BaseModalWindowWraper";

const MainScreenButton: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };
  return (
    <>
      <button className="btn" onClick={toggleModal}>
        + НОВОЕ СОБЫТИЕ
      </button>
      <BaseModalWindowWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
    </>
  );
};

export default MainScreenButton;
