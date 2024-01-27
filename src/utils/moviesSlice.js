import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    trailerVideoId: null,
    movieDetails: null,
    movievideosDetails: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideoId: (state, action) => {
      state.trailerVideoId = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    addMovievideosDetails: (state, action) => {
      state.movievideosDetails = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideoId,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovievideosDetails,
  addMovieDetails,
} = moviesSlice.actions;

export default moviesSlice.reducer;
