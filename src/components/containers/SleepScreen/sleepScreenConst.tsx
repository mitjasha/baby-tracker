interface IndexInterface {
  [key: string]: string;
}

interface IndexInterfaceNumb {
  [key: string]: number;
}

export const sleepingTime = {
  NIGHT_SLEEP: "Ночной сон",
  DAY_SLEEP: "Дневной сон",
};

export const progressBarValue: IndexInterface = {
  DEFAULT_MAX: "100",
  NIGHT_ICON_NAME: "night-icon",
  DAY_ICON_NAME: "day-icon",
};

export const notesSize: IndexInterfaceNumb = {
  FIRST_NOTE_SIZE: 10,
  SECOND_NOTE_SIZE: 20,
  THIRD_NOTE_SIZE: 30,
};

export const progressBarClasses: IndexInterface = {
  SLEEP_NIGHT_CLASS: "sleep-night-progress",
  SLEEP_DAY_CLASS: "sleep-day-progress",
  MAIN_CONTAINER_ALL_PROGRESS: "progress-bar-container",
};

export const sleepScreenClasses: IndexInterface = {
  MAIN_CLASS: "screen",
  BABY_SLEEP_CONTAINER: "baby-sleep-container",
  TIMER_CONTAINER: "timer-container",
  BABY_PICTURE_SLEEP: "baby-sleep",
};
