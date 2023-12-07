import { POSTER_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 m-2">
      <img src={POSTER_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
