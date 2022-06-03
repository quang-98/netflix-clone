import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.forEach((item, index, array) => {
        if (item.id === action.payload) {
          delete array.splice(index, 1);
        }
      });
    },
    removeAllFavorite: (state, action) => {
      state.splice(0, state.length);
    },
  },
});

export const { addFavorite, removeFavorite, removeAllFavorite } =
  favoritesSlice.actions;

export const selectFavorite = (state) => state.user.user;

export default favoritesSlice.reducer;
