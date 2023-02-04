import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { currencyReducer } from "./reducers/currency/currencyReducer";

export const store = createStore(currencyReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
