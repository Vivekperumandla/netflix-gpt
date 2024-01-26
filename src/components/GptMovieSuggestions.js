import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovies, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black bg-opacity-90">
      {movieNames.map((eachmovie, index) => (
        <MovieList
          key={eachmovie}
          title={eachmovie}
          movies={gptMovies[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
