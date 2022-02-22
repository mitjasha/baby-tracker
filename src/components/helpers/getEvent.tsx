import { feedingСonstAll } from "../common/ALLModalEdit/ModalAddActivity/ModalAddActivityConst";
// import { activityConst } from "./getDescription";

const getEvent = (dataActive: string[]) => {
  if (feedingСonstAll.includes(dataActive[0])) return "Кормление";
  // if (activityConst.includes(dataActive[1])) return "Активность";
  return dataActive[0];
};

export default getEvent;
