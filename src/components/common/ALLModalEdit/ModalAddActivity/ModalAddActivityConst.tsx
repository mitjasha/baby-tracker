import cariaggeIcon from "../../../../assets/svg/baby-cariagge-icon.svg";
import feelingIcon from "../../../../assets/svg/feeling-icon.svg";
import gamesIcon from "../../../../assets/svg/games-icon.svg";
import bathIcon from "../../../../assets/svg/baby-bath-icon.svg";
import iconSleep from "../../../../assets/svg/sleeping-icon.svg";
import girlWalk from "../../../../assets/png/activity/girl-walk.png";
import boyWalk from "../../../../assets/png/activity/boy-walk.png";
import girlActive from "../../../../assets/png/activity/girl-play.png";
import boyActive from "../../../../assets/png/activity/boy-play.png";
import girlBath from "../../../../assets/png/activity/girl-bath.png";
import boyBath from "../../../../assets/png/activity/boy-bath.png";
import girlDefault from "../../../../assets/png/activity/girl-default.png";
import boyDefault from "../../../../assets/png/activity/boy-default.png";
import {
  FeedingButtonConst,
  IFeedingButtonConst,
} from "../../FeedingButtonContainer/FeedingButtonContainerConst";

export interface IActivityScreenConst {
  text: string;
  icon: string;
  id: string;
  img?: string | string[];
  FeedingButtonConst?: IFeedingButtonConst;
}

export interface IFood {
  [key: string]: IFoodType;
}

export interface IFoodType {
  MIN_VALUE: string;
  MAX_VALUE: string;
  STEP: string;
  PLACEHOLDER: string;
  REGISTER_VALUE: string;
  REGISTER_DATA: string;
  OZ: string;
  VARIANT: string[];
}

const ModalAddActivityConst: IActivityScreenConst[] = [
  {
    text: "Прогулка",
    id: "walk",
    icon: cariaggeIcon,
    img: [girlWalk, boyWalk],
  },
  {
    text: "Активность",
    id: "active",
    icon: gamesIcon,
    img: [girlActive, boyActive],
  },
  {
    text: "Настроение",
    id: "feeling",
    icon: feelingIcon,
    img: [girlDefault, boyDefault],
  },
  {
    text: "Купание",
    id: "bath",
    icon: bathIcon,
    img: [girlBath, boyBath],
  },
  {
    text: "Сон",
    id: "sleep",
    icon: iconSleep,
    img: iconSleep,
  },
  ...FeedingButtonConst,
];

const drinkEat: IFood = {
  bootle: {
    MIN_VALUE: "10",
    MAX_VALUE: "1000",
    STEP: "10",
    PLACEHOLDER: "Описание (компот, чай)",
    REGISTER_VALUE: "foodValue",
    REGISTER_DATA: "food",
    OZ: "мл",
    VARIANT: ["Смесь", "Грудное молоко", "Питьё"],
  },
  eat: {
    MIN_VALUE: "10",
    MAX_VALUE: "500",
    STEP: "10",
    PLACEHOLDER: "Описание (яблоко, творог)",
    REGISTER_VALUE: "foodValue",
    REGISTER_DATA: "food",
    OZ: "гр",
    VARIANT: ["Молочка", "Фрукты", "Овощи", "Злаки", "Мясо"],
  },
};

const feeding: string[] = ["Бутылочка", "Еда"];
const feedingСonstAll: string[] = [
  "Бутылочка",
  "Еда",
  "Левая грудь",
  "Правая грудь",
];

const feedingSleep: string[] = ["Бутылочка", "Сон", "Еда", "Настроение"];

export {
  ModalAddActivityConst,
  feeding,
  feedingSleep,
  drinkEat,
  feedingСonstAll,
};
