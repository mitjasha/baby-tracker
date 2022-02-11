import { post } from "./api";
import { IUser, IUserResponse } from "./api.interface";

const userController = {
  signUp: (user: IUser) => post<IUser>("/users/signup", JSON.stringify(user)),
  signIn: (user: IUser) =>
    post<IUserResponse>("/users/login", JSON.stringify(user)),
};

export default userController;
