import { IModalAddActivityForm } from "../common/ALLModalEdit/ModalAddActivity/ModalAddActivity";
import { drinkEat } from "../common/ALLModalEdit/ModalAddActivity/ModalAddActivityConst";

export const activityConstEn = ["walk", "bath", "active", "feeling"];
export const whithoutDescription = [
  "walk",
  "bath",
  "active",
  "feeling",
  "sleep",
  "leftBreast",
  "rightBreast",
];
export const feedingBreast = ["leftBreast", "rightBreast"];
export const feedingBreastRu = ["Левая грудь", "Правая грудь"];

export const activityConstRu = [
  "Прогулка",
  "Купание",
  "Активность",
  "Настроение",
];

export const activityConstNoFeelingRu = [
  "Прогулка",
  "Купание",
  "Активность",
  "Сон",
];

const getDescription = (
  data: IModalAddActivityForm,
  dataActive: string[] | string,
) => {
  console.log(dataActive);
  if (dataActive[1] === "bootle" || dataActive[1] === "eat")
    return `${data.food}, ${data.foodValue} ${drinkEat[dataActive[1]].OZ}`;
  if (data.description !== "" && !whithoutDescription.includes(dataActive[1]))
    return `${data.food}, ${data.description}, ${data.foodValue} ${
      drinkEat[dataActive[1]].OZ
    }`;
  if (feedingBreast.includes(dataActive[1])) return `${dataActive[0]}`;
  return "";
};

export default getDescription;
