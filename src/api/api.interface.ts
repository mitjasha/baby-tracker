export interface IUser {
  username: string;
  password: string;
}

export interface IUserResponse {
  user: {
    id: string;
    username: string;
    childs: IChild[];
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

export interface IChild {
  id: string;
  name: string;
  gender: EGender;
  birth: Date;
  photo: string;
}

export enum EGender {
  MALE = "Мальчик",
  FEMALE = "Девочка",
  NAN = "NaN",
}

export enum EEvents {
  SLEEP = "Сон",
  FEEDING = "Кормление",
  STROLL = "Прогулка",
  MOOD = "Настроение",
  GROWTH = "Рост",
  WEIGHT = "Вес",
  ACTIVITY = "Активность",
  BATHING = "Купание",
}
