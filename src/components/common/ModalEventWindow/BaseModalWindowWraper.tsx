import React from "react";
import ModalMenu from "./ModalEventWindow";

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalWindowWrapper: React.FC<BaseModalWrapperProps> = ({ onBackdropClick, isModalVisible }) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <ModalMenu onBackdropClick={onBackdropClick}>
      <div className="desktop-modal-window-container modal-window-container">
        <div className="modal-window-content"></div>
      </div>
    </ModalMenu>
  );
};

export default BaseModalWindowWrapper;
