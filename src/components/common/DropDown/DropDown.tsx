import React, { useEffect, useState } from "react";
import { IChild } from "../../../api/api.interface";
import userController from "../../../api/userController";

const DropDown: React.FC = () => {
  const getChild = async (): Promise<IChild[]> => {
    const accessToken = JSON.parse(
      localStorage.getItem("accessToken") as string,
    );

    const result = await userController.getUser(accessToken);
    console.log("1");

    return result.user.childs;
  };
  const [data, dataSet] = useState<IChild[]>();
  useEffect(() => {
    const setData = async () => {
      const childs = await getChild();
      console.log("2");

      dataSet(childs);
    };
    setData();
  }, []);

  const getInitialState = () => {
    const value = (data as IChild[])[0].name;
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
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
