import React from "react";
import { IChild } from "../../api/api.interface";
import eventController from "../../api/eventController";

const getTimerID = (
  currentChild: IChild,
  timerIdSet: React.Dispatch<React.SetStateAction<string>>,
): void => {
  const setData = async () => {
    const eventsList = await eventController.getAllEvents(currentChild);

    const id = eventsList.find((elem) => elem.description === "Process")
      ?.id as string;

    timerIdSet(id);
  };

  setData();
};
export default getTimerID;
