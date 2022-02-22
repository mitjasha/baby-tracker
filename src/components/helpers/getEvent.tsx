import { feedingСonstAll } from "../common/ALLModalEdit/ModalAddActivity/ModalAddActivityConst";
// import { activityConst } from "./getDescription";

const getEvent = (dataActive: string[] | string) => {
  if (feedingСonstAll.includes(dataActive[0])) return "Кормление";
  return dataActive[0];
};

export default getEvent;
