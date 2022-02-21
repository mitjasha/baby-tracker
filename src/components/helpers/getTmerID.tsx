import React from "react";
import { IChild } from "../../api/api.interface";
import eventController from "../../api/eventController";

const getTimerID = (
  currentChild: IChild,
  timerIdSet: React.Dispatch<React.SetStateAction<string | undefined>>,
): void => {
  const setData = async () => {
    const eventsList = await eventController.getAllEvents(currentChild);

    const id = eventsList.find((elem) => elem.description === "Process")
      ?.id as string;

    timerIdSet(id);
    if (id) {
      localStorage.setItem("timerId", JSON.stringify(id));
    }
  };

  setData();
};
export default getTimerID;
