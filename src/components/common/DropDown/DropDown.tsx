import React, { useEffect, useState } from "react";
import { EGender, IChild } from "../../../api/api.interface";
import userController from "../../../api/userController";

const DropDown: React.FC = () => {
  const getChild = async (): Promise<IChild[]> => {
    const accessToken = JSON.parse(
      localStorage.getItem("accessToken") as string,
    );

    const result = await userController.getUser(accessToken);

    return result.user.childs;
  };

  const [data, dataSet] = useState<IChild[]>([
    { name: "", id: "", birth: new Date(), gender: EGender.NAN, photo: "" },
  ]);

  useEffect(() => {
    const setData = async () => {
      const childs = await getChild();

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
