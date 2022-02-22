const genderChange = (el: string[], gender: string) =>
  gender === "Девочка" ? el[0] : el[1];

export default genderChange;
