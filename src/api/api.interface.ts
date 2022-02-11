export interface IUser {
  username: string;
  password: string;
}

export interface IUserLoginResponse {
  user: {
    id: string;
    username: string;
    childs: [];
    token: string;
  };
}

export interface IUserRegistrationResponse {
  user: {
    username: string;
    password: string;
    id: string;
    token: string;
  };
}
