import { configureStore } from "@reduxjs/toolkit";
import { coingeckoApi } from "./coingecko/coingecko.api";
import { currencyReducer } from "./currency/currency.slice";

export const store = configureStore({
  reducer: { 
    [coingeckoApi.reducerPath]: coingeckoApi.reducer,
    currency: currencyReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(coingeckoApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
