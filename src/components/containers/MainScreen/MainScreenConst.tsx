export enum ETimerActivity {
  walk = "Прогулка",
  bath = "Купание",
  activ = "Активность",
}

export interface ITimerEvent {
  SLEEP: string;
  ACTIVITY: ETimerActivity;
  FEEDING: string;
}

export const TimerEvent: ITimerEvent = {
  SLEEP: "Сон",
  ACTIVITY: {} as ETimerActivity,
  FEEDING: "Кормление",
};
