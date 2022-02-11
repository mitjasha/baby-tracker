export interface IUser {
  username: string;
  password: string;
}

export interface IUserResponse {
  user: {
    id: string;
    username: string;
    childs: [];
    token: string;
  };
}
