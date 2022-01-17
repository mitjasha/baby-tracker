import React from "react";
import ModalMenuButton from "../ModalMenuButton/ModalMenuButton";
import ModalEventMenu from "./ModalEventMenu";

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalEventWrapper: React.FC<BaseModalWrapperProps> = ({ onBackdropClick, isModalVisible }) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <ModalEventMenu onBackdropClick={onBackdropClick}>
      <div className="desktop-modal-container modal-container">
        <ModalMenuButton>
          <div className="modal-content"></div>
        </ModalMenuButton>
        <ModalMenuButton>
          <div className="modal-content"></div>
        </ModalMenuButton>
        <ModalMenuButton>
          <div className="modal-content"></div>
        </ModalMenuButton>
        <ModalMenuButton>
          <div className="modal-content"></div>
        </ModalMenuButton>
      </div>
    </ModalEventMenu>
  );
};

export default BaseModalEventWrapper;
