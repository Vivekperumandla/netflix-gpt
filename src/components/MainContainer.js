import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[1];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[47%] md:pt-0 bg-black w-screen aspect-video">
      <VideoTitle title={original_title} id={id} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
