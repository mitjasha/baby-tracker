import React from "react";
import ReactDOM from "react-dom";
import "./ModalMenu.css";

interface ModalProps {
  onBackdropClick: () => void;
}

const ModalMenu: React.FC<ModalProps> = ({ onBackdropClick, children }) =>
  ReactDOM.createPortal(
    <div className="overlay" onClick={onBackdropClick}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.getElementById("modal-root")!
  );

export default ModalMenu;
