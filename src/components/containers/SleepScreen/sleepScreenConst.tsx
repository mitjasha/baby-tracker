export interface IndexInterface {
  [key: string]: string;
}

export interface IndexInterfaceNumb {
  [key: string]: number;
}

export interface IsleepingTime {
  [key: string]: string;
}

export const sleepingTime: IsleepingTime = {
  NIGHT_SLEEP: "Ночной сон",
  DAY_SLEEP: "Дневной сон",
};

export const progressBarValue: IndexInterface = {
  DEFAULT_MAX: "12",
  NIGHT_ICON_NAME: "nightIcon",
  DAY_ICON_NAME: "dayIcon",
};

export const notesSize: IndexInterfaceNumb[] = [
  {
    FIRST_NOTE_SIZE: 10,
    size: 10,
  },
  {
    SECOND_NOTE_SIZE: 20,
    size: 20,
  },
  {
    THIRD_NOTE_SIZE: 30,
    size: 30,
  },
];
