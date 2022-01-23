const changeNum = (value: string) => (+value < 10 ? `0${value}` : value);

const date = new Date();
const minute = changeNum(date.getMinutes().toString());
const hour = changeNum(date.getHours().toString());
const month = changeNum((date.getMonth() + 1).toString());
const day = changeNum(date.getDate().toString());

const currentTime = `${hour}:${minute}`;
const currentDay = `${date.getFullYear()}-${month}-${day}`;

export { currentTime, currentDay };
