const timeDuration = (milisec: number) => {
  const sec = Math.floor(Math.abs(milisec) / 1000);
  const min = Math.floor(sec / 60);
  const hours = Math.floor(min / 60);
  const minAll = min - hours * 60;
  const minRest = Number((minAll / 60).toFixed(2));
  const hoursWhithRest = hours + minRest;
  const allTime = {
    hours,
    minAll,
    minRest,
    hoursWhithRest,
  };
  return allTime;
};

export default timeDuration;
