import { IValute } from "../../../models/IValute";

export interface ICurrencyState {
  currencies: IValute[];
  isLoading: boolean;
  timestamp: number | null;
  error?: string | null;
}

export enum CurrencyActionEnum {
  FETCH_CURRENCIES = "FETCH_CURRENCIES",
  FETCH_CURRENCIES_SUCCES = "FETCH_CURRENCIES_SUCCES",
  FETCH_CURRENCIES_ERROR = "FETCH_CURRENCIES_ERROR",
}

export interface FetchCurrenciesAction {
  type: CurrencyActionEnum.FETCH_CURRENCIES;
  payload: boolean;
}

export interface FetchCurrenciesSuccesAction {
  type: CurrencyActionEnum.FETCH_CURRENCIES_SUCCES;
  payload: IValute[];
}

export interface FetchCurrenciesErrorAction {
  type: CurrencyActionEnum.FETCH_CURRENCIES_ERROR;
  payload: string;
}

export type CurrencyAction =
  | FetchCurrenciesAction
  | FetchCurrenciesSuccesAction
  | FetchCurrenciesErrorAction;
