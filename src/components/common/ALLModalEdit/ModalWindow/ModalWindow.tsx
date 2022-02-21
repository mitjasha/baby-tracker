import React, { FC, ReactNode } from "react";
import cn from "classnames";
import "./ModalWindow.css";

type TBtn = {
  type?: "submit" | "reset" | "button" | undefined;
  text: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
  form?: string;
};

interface IModalWindow {
  id: string | undefined;
  children?: ReactNode;
  iconImg: string;
  childrenModalContent?: ReactNode;
  withFooter: boolean;
  withIcon: boolean;
  withOverlay: boolean;
  primaryBtn: TBtn;
  secondaryBtn?: TBtn;
  className?: string;
  onClose: () => boolean | string | void | Function;
  titleModal: string | undefined;
  classNameFooter?: string;
  textError?: string;
  onClick?: () => undefined | void;
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
  withOverlay,
  onClick,
}) => {
  console.log(titleModal);
  console.log(iconImg);
  return (
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
            <div className={cn("modalFooter", classNameFooter)}>
              {textError}
            </div>
          )}
          <div className="buttons">
            {primaryBtn && (
              <button
                className={cn("modal-button", primaryBtn.className)}
                onClick={() => {
                  if (primaryBtn.onClick) primaryBtn.onClick();
                  if (onClick) onClick();
                }}
                type={primaryBtn.type}
                form={primaryBtn.form}
              >
                {primaryBtn.text}
              </button>
            )}
            {secondaryBtn && (
              <button
                className={cn("modal-button", secondaryBtn.className)}
                onClick={() => {
                  if (secondaryBtn.onClick) secondaryBtn.onClick();
                  // if (onClick) onClick();
                }}
                type={secondaryBtn.type}
                form={secondaryBtn.form}
              >
                {secondaryBtn.text}
              </button>
            )}
          </div>
        </div>
      </div>
      {withOverlay && (
        <div
          className={cn("overlay-sleep", `overlay-${className}`)}
          onClick={() => {
            onClose();
            if (onClick) onClick();
          }}
        />
      )}
    </>
  );
};

export default ModalWindow;
