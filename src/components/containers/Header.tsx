import React, { useEffect, useState } from "react";
import { IChild } from "../../api/api.interface";
import userController from "../../api/userController";
import DropDown from "../common/DropDown/DropDown";
import SideBar from "../common/SideBar/SideBar";
import "./Header.css";

const Header: React.FC = () => {
  const getChild = async (): Promise<IChild[]> => {
    const result = await userController.getUser();

    return result.user.childs;
  };

  const [value, setValue] = useState<string>();

  const [data, dataSet] = useState<IChild[]>([]);

  useEffect(() => {
    const setData = async () => {
      const childs = await getChild();
      if (value === undefined) {
        if (localStorage.getItem("currentChild")) {
          const childID: string = JSON.parse(
            localStorage.getItem("currentChild") as string,
          );
          setValue(childs.filter((elem) => elem.id === childID)[0].name);
        }
      }
      if (value) {
        childs.forEach((childData) => {
          if (childData.name === value) {
            localStorage.setItem("currentChild", JSON.stringify(childData.id));
          }
        });
      }

      dataSet(childs);
    };
    setData();
  }, []);

  const handleChange = (e: { target: { value: string } }) => {
    setValue(e.target.value as string);

    data.forEach((childData) => {
      if (childData.name === e.target.value) {
        localStorage.setItem("currentChild", JSON.stringify(childData.id));
      }
    });

    window.location.reload();
  };

  return (
    <header className="header">
      <div className="header-container">
        <SideBar />

        <DropDown
          value={value as string}
          handleChange={handleChange}
          data={data}
        />
      </div>
    </header>
  );
};

export default Header;
