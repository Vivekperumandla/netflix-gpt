import { Background_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

export const GptSearch = () => {
  return (
    <div>
      <div className="absolute -mt-20 -z-10">
        <img className="w-screen" src={Background_URL} alt="Background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};
