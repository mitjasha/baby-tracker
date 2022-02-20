import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import classes from "./ChartSleep.module.css";
import timeDuration from "../../../helpers/getTimeDuration";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

// const sleepObj = (localStorage.getItem("Сон") as string)
//   .split(", ")
//   .map((el: string) => JSON.parse(el));
// console.log(sleepObj);const sleepObj = [
const sleepObj = [
  {
    event: "Сон",
    startTime: "2022-02-13 22:00",
    endTime: "2022-02-14 08:27",
    description: "",
  },
  {
    event: "Сон",
    startTime: "2022-02-14 12:00",
    endTime: "2022-02-14 14:00",
    description: "",
  },
  {
    event: "Сон",
    startTime: "2022-02-14 18:00",
    endTime: "2022-02-14 19:00",
    description: "",
  },
  {
    event: "Сон",
    startTime: "2022-02-14 21:00",
    endTime: "2022-02-15 08:00",
    description: "",
  },
];

const newDataForSleepChart = sleepObj.map((el, ind) => {
  const sleepEvent = [];
  const dateStart = new Date(el.startTime);
  const dateEnd = new Date(el.endTime);
  console.log(dateStart.getDate(), dateEnd.getDate());
  const timeD = Date.parse(el.startTime) - Date.parse(el.endTime);
  const sleepDuration = timeDuration(timeD).hoursWhithRest;
  if (dateStart.getDate() !== dateEnd.getDate()) {
    if (ind === 0) {
      sleepEvent.push("night", sleepDuration - (24 - dateStart.getHours()));
    } else if (ind !== 0) {
      sleepEvent.push("night", 24 - dateStart.getHours());
    }
  } else {
    sleepEvent.push("day", sleepDuration);
  }

  return sleepEvent;
});

console.log(newDataForSleepChart);

// console.log(dateFF.getDay());
// const timeD =
//   Date.parse(sleepObj[0].startTime) - Date.parse(sleepObj[0].endTime);

// console.log(timeDuration(timeD).hoursWhithRest);

// const sleepWeak = [
//   [8, 4, 2, 4, 1, 5, 0],
//   [10, 5, 2, 4, 3],
//   [6, 4, 1, 3, 1, 4, 5],
//   [7, 5, 2, 2, 2, 3, 3],
//   [7, 4, 2, 3, 2, 3, 3],
//   [5, 5, 3, 5, 6],
//   [7, 5, 2, 6, 4],
// ];

// const maxLength = Math.max(...sleepWeak.map((el) => el.length));
// const arrChartSleep = sleepWeak.map((el) => {
//   const newArr = [...el]
//     .slice(0, el.length - 1)
//     .concat(Array(maxLength - el.length).fill(0));
//   newArr.push(el[el.length - 1]);
//   return newArr;
// });
// console.log(arrChartSleep);
// const line = (num: number) => arrChartSleep.map((el) => el[num]);

export const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      min: 0,
      max: 24,
    },
  },
};

const labels = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const color = { night: "#4aa7f1", day: "#a7bc28", nan: "#fff0" };

export const data = {
  labels,
  datasets: [
    {
      backgroundColor: color.night,
      data: [],
    },
    {
      backgroundColor: color.nan,
      data: [],
    },
    {
      backgroundColor: color.day,
      data: [],
    },
    {
      backgroundColor: color.nan,
      data: [],
    },
    {
      backgroundColor: color.day,
      data: [],
    },
    {
      backgroundColor: color.nan,
      data: [],
    },
    {
      backgroundColor: color.night,
      data: [],
    },
  ],
};

const ChartSleep: React.FC = () => (
  <>
    <h3 className={classes.h3}>Трекер сна</h3>
    <Bar className={classes.container} options={options} data={data} />
  </>
);

export default ChartSleep;
