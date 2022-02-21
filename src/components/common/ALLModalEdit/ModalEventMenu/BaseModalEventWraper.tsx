import React from "react";
import ModalMenuButton from "../../Buttons/ModalMenuButton/ModalMenuButton";
import ModalEventMenu from "./ModalEventMenu";

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalEventWrapper: React.FC<BaseModalWrapperProps> = ({
  onBackdropClick,
  isModalVisible,
}) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <ModalEventMenu onBackdropClick={onBackdropClick}>
      <div className="desktop-modal-container modal-container">
        <ModalMenuButton eventName="Кормление">
          <div className="modal-content">Приём пищи</div>
        </ModalMenuButton>
        <ModalMenuButton eventName="Активность">
          <div className="modal-content">Активность</div>
        </ModalMenuButton>
        <ModalMenuButton eventName="Сон">
          <div className="modal-content">Сон</div>
        </ModalMenuButton>
        <ModalMenuButton eventName="Прогулка">
          <div className="modal-content">Прогулка</div>
        </ModalMenuButton>
      </div>
    </ModalEventMenu>
  );
};

export default BaseModalEventWrapper;
