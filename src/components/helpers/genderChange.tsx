import { IfeelingConst } from "../common/Inputs/InputFeeling/InputFeelingConst";

const genderChange = (el: IfeelingConst, gender: string) =>
  gender === "Девочка" ? el.text[0] : el.text[1];

export default genderChange;
