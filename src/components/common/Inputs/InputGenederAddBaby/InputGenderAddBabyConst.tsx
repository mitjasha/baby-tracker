import boy from "../../../../assets/png/feeling/boy/06.png";
import girl from "../../../../assets/png/feeling/girl/06.png";

export interface IGenderAddBaby {
  [key: string]: string;
}

const genderConst: IGenderAddBaby[] = [
  {
    text: "мальчик",
    img: boy,
    id: "boy",
  },
  {
    text: "девочка",
    img: girl,
    id: "girl",
  },
];

export default genderConst;
