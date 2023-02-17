import { bindActionCreators } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { currencyActions } from "../store/currency/currency.slice";
import { favoritesActions } from "../store/currency/favorites.slice";

const actions = {
  ...currencyActions,
	...favoritesActions

}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}