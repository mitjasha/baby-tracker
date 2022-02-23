import { IEventResponse } from "../../api/api.interface";
import getFormattedData from "./getFormattedDate";

const getEventsSort = (events: IEventResponse[] | undefined) => {
  if (!events) {
    // eslint-disable-next-line no-param-reassign
    events = [
      {
        id: "",
        event: "",
        startTime: String(new Date()),
        endTime: String(Date.now()),
        description: "",
      },
    ];
  }
  const activities = getFormattedData(
    events.sort((a, b) => Date.parse(b.startTime) - Date.parse(a.startTime)),
  );
  return activities;
};

export default getEventsSort;
