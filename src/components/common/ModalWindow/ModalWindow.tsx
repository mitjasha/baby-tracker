/* eslint-disable global-require */
import React, { FC, ReactNode, MouseEvent } from "react";
import cn from "classnames";
import "./ModalWindow.css";

type TPrimaryBtn = {
  text: string;
  onClick?: (event: MouseEvent) => void;
  icon?: string;
  className?: string;
};

type TSecondaryBtn = {
  onClick: () => void;
  text?: string;
  icon?: string;
  className?: string;
};

interface IModalWindow {
  children?: ReactNode;
  iconImg: string;
  childrenModalContent?: ReactNode;
  withFooter: boolean;
  withIcon: boolean;
  primaryBtn: TPrimaryBtn;
  secondaryBtn?: TSecondaryBtn;
  className?: string;
  onClose: (event: MouseEvent) => void;
  titleModal: string | undefined;
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
  onClose,
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

        {withFooter && <div className="modalFooter" />}
        {primaryBtn && (
          <button
            className={cn("modal-button", primaryBtn.className)}
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
