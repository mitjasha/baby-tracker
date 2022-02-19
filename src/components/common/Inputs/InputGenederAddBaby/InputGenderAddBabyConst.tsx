import boy from "../../../../assets/png/feeling/boy/06.png";
import girl from "../../../../assets/png/feeling/girl/06.png";

export interface IGenderAddBaby {
  [key: string]: string;
}

const genderConst: IGenderAddBaby[] = [
  {
    text: "Мальчик",
    img: boy,
    id: "boy",
  },
  {
    text: "Девочка",
    img: girl,
    id: "girl",
  },
];

export default genderConst;
