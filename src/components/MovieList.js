import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-md md:text-2xl text-white pl-1 py-2">{title}</h1>
      <div className="flex overflow-x-scroll custom-scrollbar-x">
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
