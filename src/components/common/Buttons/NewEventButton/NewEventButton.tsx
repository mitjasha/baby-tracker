import React, { useState } from "react";
import BaseModalEventWrapper from "../../ALLModalEdit/ModalEventMenu/BaseModalEventWraper";

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
      <BaseModalEventWrapper
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      />
    </div>
  );
};

export default NewEventButton;
