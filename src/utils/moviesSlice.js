import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideoId: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideoId: (state, action) => {
      state.trailerVideoId = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideoId } = moviesSlice.actions;

export default moviesSlice.reducer;
