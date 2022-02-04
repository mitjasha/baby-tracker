import calmGirl from "../../../../assets/png/feeling/girl/01.png";
import funnyGirl from "../../../../assets/png/feeling/girl/02.png";
import sadGirl from "../../../../assets/png/feeling/girl/03.png";
import capriciousGirl from "../../../../assets/png/feeling/girl/04.png";
import whinyGirl from "../../../../assets/png/feeling/girl/05.png";
import playfulGirl from "../../../../assets/png/feeling/girl/06.png";

export interface IfeelingConst {
  text: string;
  img: string;
}

const feelingConst: IfeelingConst[] = [
  {
    text: "Спокойная",
    img: calmGirl,
  },
  {
    text: "Весёлая",
    img: funnyGirl,
  },
  {
    text: "Грустная",
    img: sadGirl,
  },
  {
    text: "Капризная",
    img: capriciousGirl,
  },
  {
    text: "Плаксивая",
    img: whinyGirl,
  },
  {
    text: "Игривая",
    img: playfulGirl,
  },
];

export default feelingConst;
