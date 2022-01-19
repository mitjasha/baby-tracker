import React from "react";
import ModalEventWindow from "./ModalEventWindow";

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalWindowWrapper: React.FC<BaseModalWrapperProps> = ({ onBackdropClick, isModalVisible }) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <ModalEventWindow onBackdropClick={onBackdropClick}>
      <div className="desktop-modal-window-container modal-window-container">
        <div className="modal-window-content"></div>
      </div>
    </ModalEventWindow>
  );
};

export default BaseModalWindowWrapper;
