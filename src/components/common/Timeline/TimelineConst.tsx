import cariaggeIcon from "../../../assets/svg/baby-cariagge-icon.svg";
import feelingIcon from "../../../assets/svg/feeling-icon.svg";
import gamesIcon from "../../../assets/svg/games-icon.svg";
import bathIcon from "../../../assets/svg/baby-bath-icon.svg";
import bottleIcon from "../../../assets/svg/bottle-icon.svg";
import sleepingIcon from "../../../assets/svg/sleeping-icon.svg";
import heightIcon from "../../../assets/svg/ruler-solid.svg";
import weightIcon from "../../../assets/svg/weight-scale-solid.svg";

export interface ITimelineConst {
  text: string;
  icon: string;
}

const TimelineConst: ITimelineConst[] = [
  {
    text: "Сон",
    icon: sleepingIcon,
  },
  {
    text: "Кормление",
    icon: bottleIcon,
  },
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
  {
    text: "Рост",
    icon: heightIcon,
  },
  {
    text: "Вес",
    icon: weightIcon,
  },
];

export default TimelineConst;
