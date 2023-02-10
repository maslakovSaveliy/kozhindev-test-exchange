import { CurrencyAction, CurrencyActionEnum } from "./types";
import axios from "axios";
import { Dispatch } from "react";
import { IValute } from "../../../models/IValute";
import { RUB } from "../../../constants/RUB";

export const CurrencyActionCreators = {
  getCurrencies: () => async (dispatch: Dispatch<CurrencyAction>) => {
    try {
      dispatch({ type: CurrencyActionEnum.FETCH_CURRENCIES, payload: true });
      const res = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");
      const valutes = Object.values(res.data.Valute) as IValute[];
      dispatch({
        type: CurrencyActionEnum.FETCH_CURRENCIES_SUCCES,
        payload: [...valutes, RUB],
      });
    } catch (e) {
      dispatch({
        type: CurrencyActionEnum.FETCH_CURRENCIES_ERROR,
        payload: "Something went wrong... Try again later.",
      });
    }
  },
};
