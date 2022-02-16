import { del, get, post, put } from "./api";
import { IChild, IChildCreate } from "./api.interface";

const childController = {
  addChild: (child: IChildCreate, accessToken: string) =>
    post<IChild>("/childs/add", JSON.stringify(child), accessToken),
  delChild: (child: IChild, accessToken: string) =>
    del(`/childs/${child.id}`, accessToken),
  getChildById: (childID: string, accessToken: string) =>
    get<IChild>(`/childs/${childID}`, accessToken),
  updateChild: (child: IChild, accessToken: string) =>
    put(`/childs/${child.id}`, accessToken),
};
export default childController;
