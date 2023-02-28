import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface FavoritesState {
  favorites: string[]
}

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]') as string[]

}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites(state, action: PayloadAction<string>) {
      state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
		deleteFavorites(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(el => el !== action.payload)
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }
  }
})

export const favoritesActions = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;