import { CurrencyInputState } from "../components/Converter";
import { IValute } from "../models/IValute";

export const convert = (
  inputValue: string,
  fromCurrency: CurrencyInputState,
  toCurrency: CurrencyInputState,
  currencies: IValute[],
  type: "to" | "from"
) => {
  const value = inputValue.replace(",", ".");
  let result = 0;
  if (type == "from") {
    const price =
      Number(value) *
      Number(
        currencies.find((item) => item.CharCode === fromCurrency.name)?.Value
      );
    result =
      price /
      Number(
        currencies.find((item) => item.CharCode === toCurrency.name)?.Value
      );
  }
  if (type == "to") {
    const price =
      Number(value) *
      Number(
        currencies.find((item) => item.CharCode === toCurrency.name)?.Value
      );
    result =
      price /
      Number(
        currencies.find((item) => item.CharCode === fromCurrency.name)?.Value
      );
  }
  return result;
};
