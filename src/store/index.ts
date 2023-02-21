import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { coingeckoApi } from "./coingecko/coingecko.api";
import { currencyReducer } from "./currency/currency.slice";
import { favoritesReducer } from "./currency/favorites.slice";

export const store = configureStore({
  reducer: { 
    [coingeckoApi.reducerPath]: coingeckoApi.reducer,
    currency: currencyReducer,
		favorites: favoritesReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(coingeckoApi.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
