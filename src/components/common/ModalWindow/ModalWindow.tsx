import React, {FC, ReactNode} from "react";
import cn from "classnames";
import "./ModalWindow.css";


type TPrimaryBtn = {
    onClick: () => void,
    text?: string,
    icon?: string,
    className?: string,
}

type TSecondaryBtn = {
    onClick: () => void,
    text?: string,
    icon?: string,
    className?: string,
}

interface IModalWindow {
    children: ReactNode,
    withFooter: boolean,
    primaryBtn?: TPrimaryBtn,
    secondaryBtn?: TSecondaryBtn,
    className?: string 
    onClose: () => void
}
const ModalWindow: FC<IModalWindow> = ({
    children,
    withFooter,
    primaryBtn,
    secondaryBtn,
    className,
    onClose
}) =>  (
    <>

       <div className = {cn("modal", `${className}`)}>
            <div className={cn("modalOpen")}>
                <div className="modalWrapper">
                    {children}
                </div>
            {withFooter && (
            <div className="modalFooter">
                {primaryBtn && (
                    <button className={primaryBtn.className} onClick={primaryBtn.onClick}>{primaryBtn.text}</button>
                )}
                {secondaryBtn && (
                    <button className={secondaryBtn.className} onClick={secondaryBtn.onClick}>{secondaryBtn.text}</button>
                )}
            </div>
        )}        
    </div>    
</div>
    <div className = {cn("overlay-sleep", `${className}`)}  onClick = {onClose}/>
</>
    );


export default ModalWindow;
