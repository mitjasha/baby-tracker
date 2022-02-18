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

export interface IChildResponse {
  id: string;
  name: string;
  gender: string;
  birth: string;
  photo: string;
}

export interface IChildCreate {
  name: string;
  gender: EGender;
  birth: Date;
  photo: string;
}

export interface IChildUpdate {
  name?: string;
  gender?: EGender;
  birth?: Date;
  photo?: string;
}

export interface IEvent {
  event: string;
  startTime: Date;
  endTime: Date;
  description: string;
}

export interface IEventResponse {
  id: string;
  event: string;
  startTime: string;
  endTime: string;
  description: string;
  child?: IChildResponse;
}

export interface IEventRequest {
  id: string;
  event: string;
  startTime: Date;
  endTime: Date;
  description: string;
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
  HEIGHT = "Рост",
  WEIGHT = "Вес",
  ACTIVITY = "Активность",
  BATHING = "Купание",
}
