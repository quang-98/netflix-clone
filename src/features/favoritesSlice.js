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
          delete array.splice(index, 1)
        }
      });
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectUser = (state) => state.user.user;

export default favoritesSlice.reducer;
