import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CURRENCIES } from "../../constants/currencies";

const LS_CURRENCY_KEY = 'curr';

interface CurrencyState {
  currency: CURRENCIES
}

const initialState: CurrencyState = {
  currency: localStorage.getItem(LS_CURRENCY_KEY) as CURRENCIES ?? CURRENCIES.USD
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeCurrency(state, action: PayloadAction<CURRENCIES>) {
      state.currency = action.payload;
      localStorage.setItem(LS_CURRENCY_KEY, state.currency);
    }
  }
})

export const currencyActions = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;