import { createSlice } from "@reduxjs/toolkit";

const favoritreSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritreSlice.actions.addFavorite;
export const removeFavorite = favoritreSlice.actions.removeFavorite;
export default favoritreSlice.reducer;
