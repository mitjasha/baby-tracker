import { IEventResponse } from "../../api/api.interface";

export interface IItem {
  id: string;
  event: string;
  startTime: string;
  duration: number;
  description: string;
  key: number;
}

const getFormattedData = (items: IEventResponse[]) => {
  const activities: { [date: string]: IItem[] } = {};
  items.forEach(
    ({ id, event, startTime, endTime, description }, index: number) => {
      const startDate = Date.parse(startTime);
      const endDate = Date.parse(endTime);
      const duration = endDate - startDate;
      const dateStr: string = Intl.DateTimeFormat("ru-Ru", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date(startDate));

      const list: IItem[] = activities[dateStr] || [];
      list.push({
        id,
        event,
        startTime: Intl.DateTimeFormat("ru-Ru", {
          hour: "numeric",
          minute: "numeric",
        }).format(new Date(startDate)),
        duration,
        description,
        key: index,
      });
      activities[dateStr] = list;
    },
  );

  return activities;
};

export default getFormattedData;
