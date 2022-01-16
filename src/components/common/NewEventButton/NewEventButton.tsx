import React, { useState } from "react";
import BaseModalWrapper from "../ModalMenu/BaseModalWraper";

import "./NewEventButton.css";

const NewEventButton: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <div>
      <button className="btn" onClick={toggleModal}>
        + НОВОЕ СОБЫТИЕ
      </button>
      <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
    </div>
  );
};

export default NewEventButton;
