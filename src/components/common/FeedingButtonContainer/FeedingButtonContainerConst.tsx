import leftBreast from "../../../assets/svg/left-breast.svg";
import rightBreast from "../../../assets/svg/right-breast.svg";
import bottleWhite from "../../../assets/svg/bottle-icon-whight.svg";
import cutlery from "../../../assets/svg/cutlery.svg";

export interface IFeedingButtonConst {
  text: string;
  id: string;
  icon: string;
}

export const FeedingButtonConst: IFeedingButtonConst[] = [
  {
    text: "Левая грудь",
    id: "leftBreast",
    icon: leftBreast,
  },
  {
    text: "Правая грудь",
    id: "rightBreast",
    icon: rightBreast,
  },
  {
    text: "Бутылочка",
    id: "bootle",
    icon: bottleWhite,
  },
  {
    text: "Еда",
    id: "food",
    icon: cutlery,
  },
];
