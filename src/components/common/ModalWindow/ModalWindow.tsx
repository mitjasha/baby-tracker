/* eslint-disable global-require */
import React, { FC, ReactNode } from "react";
import cn from "classnames";
import "./ModalWindow.css";

type TPrimaryBtn = {
  type?: "submit" | "reset" | "button" | undefined;
  text: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
  form?: string;
};

type TSecondaryBtn = {
  onClick: () => void;
  text?: string;
  icon?: string;
  className?: string;
};

interface IModalWindow {
  id: string | undefined;
  children?: ReactNode;
  iconImg: string;
  childrenModalContent?: ReactNode;
  withFooter: boolean;
  withIcon: boolean;
  primaryBtn: TPrimaryBtn;
  secondaryBtn?: TSecondaryBtn;
  className?: string;
  onClose: () => string | void;
  titleModal: string | undefined;
  classNameFooter?: string;
  textError?: string;
}

const ModalWindow: FC<IModalWindow> = ({
  children,
  titleModal,
  iconImg,
  withFooter,
  withIcon,
  primaryBtn,
  secondaryBtn,
  className,
  classNameFooter,
  onClose,
  textError,
}) => (
  <>
    <div className={cn("modal", `modal-${className}`)}>
      <div className={cn("modalOpen")}>
        <div className="modalWrapper">
          <h3 className="title-modal">{titleModal}</h3>
          <div className="content-modal">{children}</div>
        </div>
        {withIcon && (
          <div className="modalIcon">
            <img
              className={cn("modal-icon-img", `icon-${titleModal}`)}
              src={`${iconImg}`}
            />
          </div>
        )}

        {withFooter && (
          <div className={cn("modalFooter", classNameFooter)}>{textError}</div>
        )}
        {primaryBtn && (
          <button
            className={cn("modal-button", primaryBtn.className)}
            type={primaryBtn.type}
            form={primaryBtn.form}
            onClick={primaryBtn.onClick}
          >
            {primaryBtn.text}
          </button>
        )}
        {secondaryBtn && (
          <button
            className={cn("modal-button", secondaryBtn.className)}
            onClick={secondaryBtn.onClick}
          >
            {secondaryBtn.text}
          </button>
        )}
      </div>
    </div>
    <div
      className={cn("overlay-sleep", `overlay-${className}`)}
      onClick={onClose}
    />
  </>
);

export default ModalWindow;
