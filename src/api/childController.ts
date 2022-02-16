import { del, get, post, put } from "./api";
import { IChild, IChildCreate } from "./api.interface";

const childController = {
  addChild: (child: IChildCreate) =>
    post<IChild>("/childs/add", JSON.stringify(child)),
  delChild: (child: IChild) => del(`/childs/${child.id}`),
  getChildById: (childID: string) => get<IChild>(`/childs/${childID}`),
  updateChild: (child: IChild) =>
    put(`/childs/${child.id}`, JSON.stringify(child)),
};
export default childController;
