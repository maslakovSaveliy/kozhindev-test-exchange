import { IValute } from "../models/IValute";
import { CODES } from "./valuteCodes";

export const RUB: IValute = {
  ID: "RUB01",
  NumCode: "RUB1",
  CharCode: CODES.RUB,
  Nominal: 1,
  Name: "Российский рубль",
  Value: 1,
  Previous: 1,
};

// Добавлен, так как в API нет рубля.
