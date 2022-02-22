const saveSetting = (palitra: string) => {
  localStorage.setItem("palitra", palitra);
  console.log(palitra);
};

export default saveSetting;
