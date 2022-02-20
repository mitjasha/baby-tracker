import leftBreast from "../../../assets/svg/left-breast.svg";
import rightBreast from "../../../assets/svg/right-breast.svg";
import bottleWhite from "../../../assets/svg/bottle-icon-whight.svg";
import cutlery from "../../../assets/svg/cutlery.svg";

export interface IFeedingButtonConst {
  text: string;
  icon: string;
}

export const FeedingButtonConst: IFeedingButtonConst[] = [
  {
    text: "Левая грудь",
    icon: leftBreast,
  },
  {
    text: "Правая грудь",
    icon: rightBreast,
  },
  {
    text: "Бутылочка",
    icon: bottleWhite,
  },
  {
    text: "Еда",
    icon: cutlery,
  },
];
