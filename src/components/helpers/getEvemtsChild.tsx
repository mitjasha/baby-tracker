import { useState, useEffect } from "react";
import { IChild, IEventResponse } from "../../api/api.interface";
import childController from "../../api/childController";
import eventController from "../../api/eventController";
import userController from "../../api/userController";

const getEventsChild = (nameEvent: string) => {
  let childID: string = JSON.parse(
    localStorage.getItem("currentChild") as string,
  );
  const getChild = async (): Promise<IChild[]> => {
    const result = await userController.getUser();
    return result.user.childs;
  };

  const [events, eventsSet] = useState<IEventResponse[]>();
  useEffect(() => {
    const setData = async () => {
      if (!childID) {
        const childs = await getChild();
        childID = childs[0].id;
      }
      const currentChild = await childController.getChildById(childID);
      const eventsList = await eventController.getAllEvents(currentChild);
      eventsSet(eventsList.filter((el) => el.event === nameEvent));
    };

    setData();
  }, []);
  return events;
};

export default getEventsChild;
