import React from "react";
import ModalMenu from "./ModalMenu";

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({ onBackdropClick, isModalVisible }) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <ModalMenu onBackdropClick={onBackdropClick}>
      <div className="desktop-modal-container modal-container">
        <div className="modal-content"></div>
        <div className="modal-content"></div>
        <div className="modal-content"></div>
        <div className="modal-content"></div>
      </div>
    </ModalMenu>
  );
};

export default BaseModalWrapper;
