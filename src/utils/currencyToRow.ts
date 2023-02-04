import { IValute } from "../models/IValute";
import { course } from "./course";
import { CODES } from "./valuteCodes";

export const currencyToRow = (currencies: IValute[]) => {
  return [
    ...currencies.map((currency, index) => ({
      id: index + 1,
      code: currency.CharCode,
      name: currency.Name,
      rubCourse: currency.Value.toFixed(2),
      usdCourse: course(currency.Value, CODES.USD, currencies),
      eurCourse: course(currency.Value, CODES.EUR, currencies),
      cnyCourse: course(currency.Value, CODES.CNY, currencies),
    })),
  ];
};
