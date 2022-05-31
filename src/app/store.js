import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "../features/favoritesSlice";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesSlice
  },
});
