const correctionNumber: ICorrectioNumber = {
  LEFT_NUM: 30,
  DURATION_NUM: 2,
  DURATION_MULTI: 0.1,
  FONT_SIZE_NUM: 5,
  FONT_SIZE_MULTI: 0.5,
  TOP_NUM: 70,
  ANIMATION_DELAY_MULTI: 0.1,
};

interface ICorrectioNumber {
  [key: string]: number;
}

export default correctionNumber;
