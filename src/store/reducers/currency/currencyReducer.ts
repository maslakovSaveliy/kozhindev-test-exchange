import { CurrencyAction, CurrencyActionEnum, ICurrencyState } from "./types";

const initialState: ICurrencyState = {
  currencies: [],
  isLoading: false,
  timestamp: null,
};

export const currencyReducer = (
  state = initialState,
  action: CurrencyAction
): ICurrencyState => {
  switch (action.type) {
    case CurrencyActionEnum.FETCH_CURRENCIES:
      return { currencies: [], isLoading: true, timestamp: null, error: null };
    case CurrencyActionEnum.FETCH_CURRENCIES_SUCCES:
      return {
        currencies: action.payload,
        isLoading: false,
        timestamp: Date.now(),
        error: null,
      };
    case CurrencyActionEnum.FETCH_CURRENCIES_ERROR:
      return {
        currencies: [],
        error: action.payload,
        isLoading: false,
        timestamp: null,
      };
    default:
      return state;
  }
};
