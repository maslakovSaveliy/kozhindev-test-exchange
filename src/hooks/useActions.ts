import { bindActionCreators } from "redux";
import { CurrencyActionCreators } from "../store/reducers/currency/action-creators";
import { useAppDispatch } from "./redux";

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(CurrencyActionCreators, dispatch);
};
