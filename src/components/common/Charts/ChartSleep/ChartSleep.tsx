import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import classes from "./ChartSleep.module.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

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
const color = {
  night: "#4aa7f1",
  day: "#a7bc28",
  transparent: "#fff0",
};

export const data = {
  labels,
  datasets: [
    {
      label: "Ночной сон",
      day: "пн",
      data: [7],
      backgroundColor: color.night,
    },
    {
      label: "Без сна",
      day: "пн",
      data: [2],
      backgroundColor: color.transparent,
    },
    {
      label: "Дневной сон",
      day: "пн",
      data: [2],
      backgroundColor: color.day,
    },
    {
      label: "Без сна",
      day: "пн",
      data: [2],
      backgroundColor: color.transparent,
    },
    {
      label: "Дневной сон",
      day: "пн",
      data: [1],
      backgroundColor: color.day,
    },
    {
      label: "Без сна",
      day: "пн",
      data: [1],
      backgroundColor: color.transparent,
    },
    {
      label: "Дневной сон",
      day: "пн",
      data: [4],
      backgroundColor: color.day,
    },
    {
      label: "Без сна",
      day: "пн",
      data: [3],
      backgroundColor: color.transparent,
    },
    {
      label: "Ночной сон",
      day: "пн",
      data: [2],
      backgroundColor: color.night,
    },
    {
      label: "Ночной сон",
      day: "вт",
      data: ["", 2],
      backgroundColor: color.night,
    },
    {
      label: "Без сна",
      day: "вт",
      data: ["", 2],
      backgroundColor: color.transparent,
    },
    {
      label: "Дневной сон",
      day: "вт",
      data: ["", 5],
      backgroundColor: color.day,
    },
    {
      label: "Без сна",
      day: "вт",
      data: ["", 5],
      backgroundColor: color.transparent,
    },
    {
      label: "Без сна",
      day: "вт",
      data: ["", 2],
      backgroundColor: color.transparent,
    },
    {
      label: "Дневной сон",
      day: "вт",
      data: ["", 8],
      backgroundColor: color.night,
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
