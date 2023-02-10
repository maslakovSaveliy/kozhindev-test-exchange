import { IValute } from "../models/IValute";
import { CODES } from "../constants/valuteCodes";

export const course = (
  value: number,
  name: CODES.USD | CODES.EUR | CODES.CNY,
  currencies: IValute[]
): string => {
  return (
    value / Number(currencies.find((i) => i.CharCode == name)?.Value)
  ).toFixed(2);
};
