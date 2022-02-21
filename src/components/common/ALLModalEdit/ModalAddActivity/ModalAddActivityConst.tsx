import cariaggeIcon from "../../../../assets/svg/baby-cariagge-icon.svg";
import feelingIcon from "../../../../assets/svg/feeling-icon.svg";
import gamesIcon from "../../../../assets/svg/games-icon.svg";
import bathIcon from "../../../../assets/svg/baby-bath-icon.svg";
import iconSleep from "../../../../assets/svg/sleeping-icon.svg";
import walk from "../../../../assets/png/activity/girl-walk.png";
import active from "../../../../assets/png/activity/girl-play.png";
import bath from "../../../../assets/png/activity/girl-bath.png";
import girlDefault from "../../../../assets/png/activity/girl-default.png";
import {
  FeedingButtonConst,
  IFeedingButtonConst,
} from "../../FeedingButtonContainer/FeedingButtonContainerConst";

export interface IActivityScreenConst {
  text: string;
  icon: string;
  img?: string;
  FeedingButtonConst?: IFeedingButtonConst;
}

export interface IdrinkConst {
  [key: string]: string;
}

export interface IdrinlEat {
  eat: IdrinkConst;
  bootle: IdrinkConst;
}

const ModalAddActivityConst: IActivityScreenConst[] = [
  {
    text: "Прогулка",
    icon: cariaggeIcon,
    img: walk,
  },
  {
    text: "Активность",
    icon: gamesIcon,
    img: active,
  },
  {
    text: "Настроение",
    icon: feelingIcon,
    img: girlDefault,
  },
  {
    text: "Купание",
    icon: bathIcon,
    img: bath,
  },
  {
    text: "Сон",
    icon: iconSleep,
    img: iconSleep,
  },
  ...FeedingButtonConst,
];

const drinkEat = {
  eat: {
    MIN_VALUE: "10",
    MAX_VALUE: "1000",
    STEP: "10",
    PLACEHOLDER: "Описание (компот, чай)",
    REGISTER_VALUE: "drinkValue",
    REGISTER_DATA: "drink",
    OZ: "мл",
  },
  bootle: {
    MIN_VALUE: "10",
    MAX_VALUE: "500",
    STEP: "10",
    PLACEHOLDER: "Яблоко (творог)",
    REGISTER_VALUE: "eatValue",
    REGISTER_DATA: "eat",
    OZ: "гр",
  },
};

console.log(`${drinkEat["eat"][MIN_VALUE]}`);

const feeding: string[] = ["Бутылочка", "Еда"];
const feedingSleep: string[] = ["Бутылочка", "Сон", "Еда"];

export { ModalAddActivityConst, feeding, feedingSleep, drinkEat };
