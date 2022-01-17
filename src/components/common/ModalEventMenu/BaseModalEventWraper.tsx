import React from "react";
import ModalMenu from "./ModalEventMenu";

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalEventWrapper: React.FC<BaseModalWrapperProps> = ({ onBackdropClick, isModalVisible }) => {
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

export default BaseModalEventWrapper;
