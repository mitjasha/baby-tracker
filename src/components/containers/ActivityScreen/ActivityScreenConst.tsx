import cariaggeIcon from "../../../assets/svg/baby-cariagge-icon.svg";
import feelingIcon from "../../../assets/svg/feeling-icon.svg";
import gamesIcon from "../../../assets/svg/games-icon.svg";
import bathIcon from "../../../assets/svg/baby-bath-icon.svg";
import walk from "../../../assets/png/activity/girl-walk.png";
import active from "../../../assets/png/activity/girl-active.png";
import bath from "../../../assets/png/activity/boy-active.png";
import girlDefault from "../../../assets/png/activity/girl-default.png";

export interface IActivityScreenConst {
  text: string;
  icon: string;
  img?: string;
}

const ActivityScreenConst: IActivityScreenConst[] = [
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
];

export default ActivityScreenConst;
