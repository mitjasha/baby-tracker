import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./InputAddPhoto.module.css";
import addPhoto from "./InputAddPhotoConst";

interface IInputAddPhoto {
  register: UseFormRegisterReturn;
  onClick?: () => void;
}

const InputAddPhoto: React.FC<IInputAddPhoto> = ({ onClick, register }) => (
  <label className={classes.photoContainer}>
    <div className={classes.photo}></div>
    <input type={addPhoto.TYPE_FILE} {...register} onClick={onClick} />
    {addPhoto.TEXT_PHOTO}
  </label>
);

export default InputAddPhoto;
