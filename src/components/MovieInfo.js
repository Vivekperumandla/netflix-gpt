import { useEffect } from "react";
import { API_OPTIONS, POSTER_CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails, addMovievideosDetails } from "../utils/moviesSlice";
import { useNavigate } from "react-router-dom";

const MovieInfo = () => {
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const navigate = useNavigate();

  const { movieId } = useParams();
  const dispatch = useDispatch();

  const fetchMovieDetails = async () => {
    const movieDetails = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      API_OPTIONS
    );
    const data = await movieDetails.json();
    console.log(data);
    dispatch(addMovieDetails({ movieDetails: data }));

    const movieVideosDetails = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const videosData = await movieVideosDetails.json();
    dispatch(addMovievideosDetails({ movievideosDetails: videosData }));

    console.log(videosData);
  };

  const goBack = () => {
    dispatch(addMovievideosDetails({ movievideosDetails: null }));
    dispatch(addMovieDetails({ movieDetails: null }));
    navigate(-1);
  };

  const movieData = useSelector((store) => store.movies?.movieDetails);
  const movieVideosData = useSelector(
    (store) => store.movies?.movievideosDetails
  );

  if (!movieVideosData?.movievideosDetails) return null;
  if (!movieData?.movieDetails) return null;

  const {
    poster_path,
    budget,
    original_title,
    overview,
    release_date,
    vote_count,
    genres,
    runtime,
  } = movieData.movieDetails;

  return (
    <div className="bg-black w-screen text-white py-10 px-12">
      <button
        onClick={goBack}
        className="mb-2 float-right bg-gray-500 text-xs text-white font-bold p-2 px-6 bg-opacity-40 rounded-md hover:bg-opacity-80"
      >
        Go Back
      </button>
      <div className=" md:flex flex-row">
        <div className="md:w-[700px]">
          <img src={POSTER_CDN_URL + poster_path} alt="Movie Poster" />
        </div>
        <div className="md:px-8">
          <h1 className="text-4xl p-2">{original_title}</h1>
          <p className="text-xl p-2">Overview</p>
          <p className="text-xl p-2">{overview}</p>

          <p className="text-xl p-2">
            {budget
              ? "Budget: $" + parseFloat(budget) / 1000000 + "million"
              : "Budget: Unavailable"}
          </p>
          <p className="text-xl p-2">Release Date: {release_date}</p>
          <p className="text-xl p-2">Run Time: {runtime} min </p>
          <p className="text-xl p-2"> Liked: {vote_count}❤ </p>

          <p className="text-xl p-2">
            Genres: {genres.map((x) => x.name + ", ")}
          </p>
        </div>
      </div>

      <div className="pt-20">
        <h1 className="text-md pb-2 md:text-2xl text-white ">Related Videos</h1>
        <div className="flex overflow-x-scroll custom-scrollbar-x text-white">
          <div className="flex -ml-3">
            {movieVideosData.movievideosDetails.results.map((vedio) => (
              <div>
                <iframe
                  key={vedio.id}
                  className="pl-4 hover:"
                  src={
                    "https://www.youtube.com/embed/" +
                    vedio?.key +
                    "?&controls=0&loop=1"
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                <h1 className="pl-4 p-2 text-2xl">{vedio.type}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
