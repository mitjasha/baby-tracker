import React , { useState } from "react";
import "./NewSleepButton.css";
import ModalSleepScreen from "../../common/ModalSleepScreen/ModalSleepScreen";


const NewSleepButton: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <div>
      <button className="btn btn-sleep" onClick={toggleModal} />
      <ModalSleepScreen isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
    </div>
  );
};

export default NewSleepButton;