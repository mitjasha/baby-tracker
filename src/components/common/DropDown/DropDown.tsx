import React, { useEffect, useState } from "react";
import { IChild } from "../../../api/api.interface";
import userController from "../../../api/userController";

const DropDown: React.FC = () => {
  const getChild = async (): Promise<IChild[]> => {
    const result = await userController.getUser();

    return result.user.childs;
  };

  const [value, setValue] = useState<string>();

  const [data, dataSet] = useState<IChild[]>([]);

  useEffect(() => {
    const setData = async () => {
      const childs = await getChild();

      dataSet(childs);
    };
    setData();
  }, []);

  useEffect(() => {
    data.forEach((child) => {
      if (value === undefined) {
        const val = (data as IChild[])[0].name;
        setValue(val);
      }
      if (child.name === value) {
        localStorage.setItem("currentChild", JSON.stringify(child.id));
      }
    });
  });

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value as string);
    data.forEach((child) => {
      if (child.name === e.target.value) {
        localStorage.setItem("currentChild", JSON.stringify(child.id));
      }
    });
  };

  return (
    <div className="dropDown">
      <select value={value} onChange={handleChange}>
        {(data as IChild[]).map((item) => (
          <option key={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
