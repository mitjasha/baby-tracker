import cariaggeIcon from "../../../assets/svg/baby-cariagge-icon.svg";
import feelingIcon from "../../../assets/svg/feeling-icon.svg";
import gamesIcon from "../../../assets/svg/games-icon.svg";
import bathIcon from "../../../assets/svg/baby-bath-icon.svg";

export interface IActivityButtonConst {
  text: string;
  icon: string;
  id: string;
}

export const ActivityButtonConst: IActivityButtonConst[] = [
  {
    text: "Прогулка",
    id: "walk",
    icon: cariaggeIcon,
  },
  {
    text: "Активность",
    id: "active",
    icon: gamesIcon,
  },
  {
    text: "Настроение",
    id: "feeling",
    icon: feelingIcon,
  },
  {
    text: "Купание",
    id: "bath",
    icon: bathIcon,
  },
];
