import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6">
      <h1 className="text-2xl text-white pl-1 py-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((eachmovie) => (
            <MovieCard key={eachmovie.id} posterPath={eachmovie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
