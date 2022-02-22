import calmGirl from "../../../../assets/png/feeling/girl/01.png";
import funnyGirl from "../../../../assets/png/feeling/girl/02.png";
import sadGirl from "../../../../assets/png/feeling/girl/03.png";
import capriciousGirl from "../../../../assets/png/feeling/girl/04.png";
import whinyGirl from "../../../../assets/png/feeling/girl/05.png";
import playfulGirl from "../../../../assets/png/feeling/girl/06.png";

export interface IfeelingConst {
  text: string[];
  img: string;
  id: string;
}

const feelingConst: IfeelingConst[] = [
  {
    text: ["Спокойная", "Спокойный"],
    img: calmGirl,
    id: "calm",
  },
  {
    text: ["Весёлая", "Весёлый"],
    img: funnyGirl,
    id: "funny",
  },
  {
    text: ["Грустная", "Грустный"],
    img: sadGirl,
    id: "sad",
  },
  {
    text: ["Капризная", "Капризный"],
    img: capriciousGirl,
    id: "capricious",
  },
  {
    text: ["Плаксивая", "Плаксивый"],
    img: whinyGirl,
    id: "whiny",
  },
  {
    text: ["Игривая", "Игривый"],
    img: playfulGirl,
    id: "playful",
  },
];

export default feelingConst;
