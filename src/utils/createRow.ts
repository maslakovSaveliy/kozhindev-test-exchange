import { IValute } from "../models/IValute";
import { course } from "./course";
import { CODES } from "./valuteCodes";

export const createRow = (item: IValute, currencies: IValute[]) => ({
  id: item.ID,
  name: item.Name,
  code: item.CharCode,
  rubCourse: String(item.Value),
  usdCourse: course(item.Value, CODES.USD, currencies),
  eurCourse: course(item.Value, CODES.EUR, currencies),
  cnyCourse: course(item.Value, CODES.CNY, currencies),
});
