import { IItem } from "../common/Timeline/TimelineItem";
import timeDuration from "./getTimeDuration";

const nightSleepDuration = (eventsSleep: IItem[]) => {
  const night: number[] = [];
  eventsSleep.forEach((el) => {
    if (night && Number(el.startTime.slice(0, 2)) > 20)
      night.push(el.duration as number);
  });
  const nightDurat = night.reduce((acc, elem) => elem + acc, 0);
  const nightDuratProgress = `${timeDuration(nightDurat).hoursWhithRest}`;
  return [
    `${Math.floor(nightDurat / 3600000) % 60}ч ${
      Math.floor(nightDurat / 60000) % 60
    }мин`,
    nightDuratProgress,
  ];
};

const daySleepDuration = (eventsSleep: IItem[]) => {
  const day: number[] = [];
  eventsSleep.forEach((el) => {
    if (
      Number(el.startTime.slice(0, 2)) > 10 &&
      Number(el.startTime.slice(0, 2)) < 20
    )
      day.push(el.duration as number);
  });
  const dayDurat = day.reduce((acc, elem) => elem + acc, 0);
  const dayDuratProgress = `${timeDuration(dayDurat).hoursWhithRest}`;
  return [
    `${Math.floor(dayDurat / 3600000) % 60}ч ${
      Math.floor(dayDurat / 60000) % 60
    }мин`,
    dayDuratProgress,
  ];
};

export { nightSleepDuration, daySleepDuration };
