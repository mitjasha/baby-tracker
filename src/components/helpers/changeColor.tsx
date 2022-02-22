/* eslint-disable no-nested-ternary */
import {
  palitra1,
  palitra2,
  palitra3,
} from "../containers/Settings/SettingConst";

const page = document.querySelector("html");

const changeColor = (palitra: string[][]) => {
  palitra.forEach((el) => page?.style.setProperty(el[0], el[1]));
};

const userColor = () => {
  if (localStorage.getItem("palitra")) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    localStorage.getItem("palitra") === "1"
      ? changeColor(palitra1)
      : localStorage.getItem("palitra") === "2"
      ? changeColor(palitra2)
      : changeColor(palitra3);
  }
};

export { changeColor, userColor };
