import { del, get, post, put } from "./api";
import { IChild, IChildCreate } from "./api.interface";

const childController = {
  addChild: (child: IChildCreate, accessToken: string) =>
    post<IChild>("childs/add", JSON.stringify(child), accessToken),
  delChild: (child: IChild, accessToken: string) =>
    del(`childs/${child.id}`, accessToken),
  getChildById: (child: IChild, accessToken: string) =>
    get<IChild>(`childs/${child.id}`, accessToken),
  updateChild: (child: IChild, accessToken: string) =>
    put(`childs/${child.id}`, accessToken),
};
export default childController;
