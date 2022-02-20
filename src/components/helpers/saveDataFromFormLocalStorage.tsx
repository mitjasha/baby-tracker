interface IDataEvent {
  [key: string]: string;
}

const saveDataFromFormToLS = (dataActive: string, dataEvent: IDataEvent) => {
  if (localStorage.getItem(`${dataActive}`)) {
    localStorage.setItem(
      `${dataActive}`,
      `${localStorage.getItem(`${dataActive}`)}, ${JSON.stringify(dataEvent)}`,
    );
  } else {
    localStorage.setItem(`${dataActive}`, JSON.stringify(dataEvent));
  }
};

export default saveDataFromFormToLS;
