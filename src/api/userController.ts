import { post } from "./api";
import {
  IUser,
  IUserLoginResponse,
  IUserRegistrationResponse,
} from "./api.interface";

const userController = {
  signUp: (user: IUser) =>
    post<IUserRegistrationResponse>("/users/signup", JSON.stringify(user)),
  signIn: (user: IUser) =>
    post<IUserLoginResponse>("/users/login", JSON.stringify(user)),
};

export default userController;
