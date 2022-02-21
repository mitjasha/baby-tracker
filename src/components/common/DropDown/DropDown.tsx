import React from "react";
import classes from "./DropDown.module.css";
import { IChild } from "../../../api/api.interface";

interface IDropDown {
  value: string;
  handleChange: (e: { target: { value: string } }) => void;
  data: IChild[];
}

const DropDown: React.FC<IDropDown> = ({ value, handleChange, data }) => (
  <div>
    <select className={classes.dropDown} value={value} onChange={handleChange}>
      {(data as IChild[]).map((item) => (
        <option key={item.id}>{item.name}</option>
      ))}
    </select>
  </div>
);

export default DropDown;
