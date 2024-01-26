import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideoId } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  //fetch TrailerVideo and updating the store with trailer video data

  const dispatch = new useDispatch();
  const trailerVideos = useSelector((store) => store.movies.trailerVideoId);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideoId(trailer.key));
  };

  useEffect(() => {
    !trailerVideos && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
