import calmGirl from "../../../../assets/png/feeling/girl/01.png";
import funnyGirl from "../../../../assets/png/feeling/girl/02.png";
import sadGirl from "../../../../assets/png/feeling/girl/03.png";
import capriciousGirl from "../../../../assets/png/feeling/girl/04.png";
import whinyGirl from "../../../../assets/png/feeling/girl/05.png";
import playfulGirl from "../../../../assets/png/feeling/girl/06.png";
import calmBoy from "../../../../assets/png/feeling/boy/01.png";
import funnyBoy from "../../../../assets/png/feeling/boy/02.png";
import sadBoy from "../../../../assets/png/feeling/boy/03.png";
import capriciousBoy from "../../../../assets/png/feeling/boy/04.png";
import whinyBoy from "../../../../assets/png/feeling/boy/05.png";
import playfulBoy from "../../../../assets/png/feeling/boy/06.png";

export interface IfeelingConst {
  text: string[];
  img: string[];
  id: string;
}

const feelingConst: IfeelingConst[] = [
  {
    text: ["Спокойная", "Спокойный"],
    img: [calmGirl, calmBoy],
    id: "calm",
  },
  {
    text: ["Весёлая", "Весёлый"],
    img: [funnyGirl, funnyBoy],
    id: "funny",
  },
  {
    text: ["Грустная", "Грустный"],
    img: [sadGirl, sadBoy],
    id: "sad",
  },
  {
    text: ["Капризная", "Капризный"],
    img: [capriciousGirl, capriciousBoy],
    id: "capricious",
  },
  {
    text: ["Плаксивая", "Плаксивый"],
    img: [whinyGirl, whinyBoy],
    id: "whiny",
  },
  {
    text: ["Игривая", "Игривый"],
    img: [playfulGirl, playfulBoy],
    id: "playful",
  },
];

export default feelingConst;
