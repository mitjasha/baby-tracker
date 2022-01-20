import React from "react";
import ModalEventMenu from "../../common/ModalEventMenu/ModalEventMenu";
import classes from "./ModalSleepScreen.module.css";

interface ModalSleepScreenProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const ModalSleepScreen: React.FC<ModalSleepScreenProps> = ({ onBackdropClick, isModalVisible }) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <ModalEventMenu onBackdropClick={onBackdropClick}>
      <div className =  {classes.modal}>
        Zzzzzzz
      </div>
    </ModalEventMenu>
  );
};

export default ModalSleepScreen;
