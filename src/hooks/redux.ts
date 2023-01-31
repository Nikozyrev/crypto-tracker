import { bindActionCreators } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { currencyActions } from "../store/currency/currency.slice";

const actions = {
  ...currencyActions
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}