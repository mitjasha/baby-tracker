import React from "react";
import moment from "moment";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import classes from "./ChartSleep.module.css";
import timeDuration from "../../../helpers/getTimeDuration";
import getFormattedData from "../../../helpers/getFormattedDate";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const sleepObj = [
  {
    id: "f1423544364554",
    event: "Сон",
    startTime: "2022-02-13 22:00",
    endTime: "2022-02-14 08:27",
    description: "",
  },

  {
    id: "f14235443645sfds54",
    event: "Сон",
    startTime: "2022-02-14 21:00",
    endTime: "2022-02-15 08:00",
    description: "",
  },
  {
    id: "f1423dd544364554",
    event: "Сон",
    startTime: "2022-02-14 18:00",
    endTime: "2022-02-14 19:00",
    description: "",
  },
  {
    id: "f1423544ss364554",
    event: "Сон",
    startTime: "2022-02-14 12:00",
    endTime: "2022-02-14 14:00",
    description: "",
  },
];

const activities = getFormattedData(
  sleepObj.sort((a, b) => Date.parse(b.startTime) - Date.parse(a.startTime)),
);

console.log(activities);

const newDataForSleepChart = sleepObj.map((el, ind) => {
  const a = moment(el.startTime);
  const b = moment(el.endTime);
  if (ind === 0) return timeDuration(b.diff(a)).hoursWhithRest;
  return timeDuration(b.diff(a)).hoursWhithRest;
});

console.log(newDataForSleepChart);

export const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      min: 0,
      max: 18,
    },
  },
};

console.log(
  newDataForSleepChart.reduce(
    (acc, b, ind) =>
      ind === 0 || ind === newDataForSleepChart.length - 1 ? acc : acc + b,
    0,
  ),
);
const labels = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const color = { night: "#4aa7f1", day: "#a7bc28", nan: "#fff0" };

export const data = {
  labels,
  datasets: [
    {
      backgroundColor: color.night,
      data: [newDataForSleepChart[0]],
    },
    {
      backgroundColor: color.day,
      data: [
        newDataForSleepChart.reduce(
          (acc, b, ind) =>
            ind === 0 || ind === newDataForSleepChart.length - 1
              ? acc
              : acc + b,
          0,
        ),
      ],
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
