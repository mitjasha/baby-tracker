interface IndexInterface {
  [key: string]: string;
}

interface IndexInterfaceNumb {
  [key: string]: number;
}

interface IsleepingTime {
  [key: string]: string;
}

export const sleepingTime: IsleepingTime = {
  NIGHT_SLEEP: "Ночной сон",
  DAY_SLEEP: "Дневной сон",
};

export const progressBarValue: IndexInterface = {
  DEFAULT_MAX: "100",
  NIGHT_ICON_NAME: "nightIcon",
  DAY_ICON_NAME: "dayIcon",
};

export const notesSize: IndexInterfaceNumb = {
  FIRST_NOTE_SIZE: 10,
  SECOND_NOTE_SIZE: 20,
  THIRD_NOTE_SIZE: 30,
};
