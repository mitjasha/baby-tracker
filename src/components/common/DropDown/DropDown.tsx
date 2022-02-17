import React from "react";
import { IChild } from "../../../api/api.interface";

interface IDropDown {
  value: string;
  handleChange: (e: { target: { value: string } }) => void;
  data: IChild[];
}

const DropDown: React.FC<IDropDown> = ({ value, handleChange, data }) => (
  <div className="dropDown">
    <select value={value} onChange={handleChange}>
      {(data as IChild[]).map((item) => (
        <option key={item.id}>{item.name}</option>
      ))}
    </select>
  </div>
);

export default DropDown;
