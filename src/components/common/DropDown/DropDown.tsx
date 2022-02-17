import React from "react";
import { IChild } from "../../../api/api.interface";

interface IDropDown {
  value: string;
  handleChange: (e: { target: { value: string } }) => void;
  data: IChild[];
}
// const getChild = async (): Promise<IChild[]> => {
//   const result = await userController.getUser();

//   return result.user.childs;
// };

// const [value, setValue] = useState<string>();

// const [data, dataSet] = useState<IChild[]>([]);

// useEffect(() => {
//   const setData = async () => {
//     const childs = await getChild();

//     dataSet(childs);
//   };
//   setData();
// }, []);

// useEffect(() => {
//   data.forEach((child) => {
//     if (value === undefined) {
//       const val = (data as IChild[])[0].name;
//       setValue(val);
//     }
//     if (child.name === value) {
//       localStorage.setItem("currentChild", JSON.stringify(child.id));
//     }
//   });
// });
// console.log("1 DropDown = ", value);

// const handleChange = (e: {
//   target: { value: React.SetStateAction<string> };
// }) => {
//   setValue(e.target.value as string);
//   data.forEach((child) => {
//     if (child.name === e.target.value) {
//       localStorage.setItem("currentChild", JSON.stringify(child.id));
//     }
//   });
// };

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
