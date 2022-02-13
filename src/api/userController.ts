import { get, post } from "./api";
import {
  IUser,
  IUserResponse,
  IUserRegistrationResponse,
} from "./api.interface";

const userController = {
  signUp: (user: IUser) =>
    post<IUserRegistrationResponse>("/users/signup", JSON.stringify(user)),
  signIn: (user: IUser) =>
    post<IUserResponse>("/users/login", JSON.stringify(user)),
  getUser: (accessToken: string) => get<IUserResponse>("/user", accessToken),
};

export default userController;
