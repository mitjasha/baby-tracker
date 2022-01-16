import React, { useState } from "react";
import BaseModalWrapper from "../ModalMenu/BaseModalWraper";

import "./NewEventButton.css";

const NewEventButton: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <div className="App">
      <button onClick={toggleModal}>Show Modal</button>
      <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
    </div>
  );
};

export default NewEventButton;
