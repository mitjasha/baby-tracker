import cariaggeIcon from "../../../assets/svg/baby-cariagge-icon.svg";
import feelingIcon from "../../../assets/svg/feeling-icon.svg";
import gamesIcon from "../../../assets/svg/games-icon.svg";
import bathIcon from "../../../assets/svg/baby-bath-icon.svg";

export interface IActivityButtonConst {
  text: string;
  icon: string;
}

export const ActivityButtonConst: IActivityButtonConst[] = [
  {
    text: "Прогулка",
    icon: cariaggeIcon,
  },
  {
    text: "Активность",
    icon: gamesIcon,
  },
  {
    text: "Настроение",
    icon: feelingIcon,
  },
  {
    text: "Купание",
    icon: bathIcon,
  },
];
