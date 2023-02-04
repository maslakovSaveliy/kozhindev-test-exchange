import { IValute } from "../models/IValute";
import { CODES } from "./valuteCodes";

export const course = (
  value: number,
  name: CODES.USD | CODES.EUR | CODES.CNY,
  currencies: IValute[]
): string => {
  switch (name) {
    case CODES.USD:
      return (
        value / Number(currencies.find((i) => i.CharCode == name)?.Value)
      ).toFixed(2);
    case CODES.EUR:
      return (
        value / Number(currencies.find((i) => i.CharCode == name)?.Value)
      ).toFixed(2);
    case CODES.CNY:
      return (
        value / Number(currencies.find((i) => i.CharCode == name)?.Value)
      ).toFixed(2);
  }
};
